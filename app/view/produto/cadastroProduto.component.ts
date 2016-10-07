/**
 * Created by Márcio Lucas on 05/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Retorno} from "../../model/Retorno";
import {HttpService} from "../../services/http.service";
declare var jQuery:any;
@Component({
    moduleId: module.id,
    selector: 'cadastro-produto',
    templateUrl: '../../template/produto/frm-cadastro-produto.component.html'
})

export class CadastroProdutoComponent implements OnInit {

    private retorno: Retorno;
    private msg: string = "";
    private isCallback = false;
    id: number;
    nome: string;
    tamanho: string;
    preco: number;
    private idCadastrado: number;


    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        jQuery('select').material_select();
    }

    callBack() {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
    }


    cadastrar() {
        this.cadastrarProduto();
        this.cadastrarPropriedadesProduto(this.idCadastrado);
    }

    cadastrarProduto() {
        if (this.nome != undefined && this.tamanho != undefined && this.preco != undefined) {
            let body: string;
            body = "q=produto&nome=" + this.nome;

            this.httpService.postJSON("http://192.168.0.104/apiTest/Angular/application/back/api/Insert.php",
                body)
                .subscribe(
                    data => this.retorno = data,
                    error => console.log(error),
                    () => this.callBack()
                )
        }
    }

    cadastrarPropriedadesProduto(idProduto: number) {
        if (this.nome != undefined && this.tamanho != undefined && this.preco != undefined) {
            let body: string;
            body = "q=propriedades_produto&tamanho=" + this.tamanho + "&preco="+this.preco+"&produto_id="+idProduto;

            this.httpService.postJSON("http://192.168.0.104/apiTest/Angular/application/back/api/Insert.php",
                body)
                .subscribe(
                    data => this.retorno = data,
                    error => console.log(error),
                    () => this.callBack()
                )
        }
    }


}