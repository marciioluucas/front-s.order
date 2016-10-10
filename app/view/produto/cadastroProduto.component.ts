/**
 * Created by Márcio Lucas on 05/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Retorno} from "../../model/Retorno";
import {HttpService} from "../../services/http.service";
declare var jQuery: any;
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
        this.gerarFormularioPropriedadesProduto();

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

            this.httpService.postJSON("Insert.php",
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
            body = "q=propriedades_produto&tamanho=" + this.tamanho + "&preco=" + this.preco + "&produto_id=" + idProduto;

            this.httpService.postJSON("Insert.php",
                body)
                .subscribe(
                    data => this.retorno = data,
                    error => console.log(error),
                    () => this.callBack()
                )
        }
    }

    gerarFormularioPropriedadesProduto() {
        var input = "" +
            '<label class="row">' +
            '<div class="row">' +
            '<div class="input-field col s8">' +
            '<input id="tamanho" type="text" class="validate" name="tamanho[]">' +
            '<label for="tamanho">Tamanho</label>' +
            '</div>' +
            '<div class="input-field col s3">' +
            '<input id="preco" type="text" class="preco" name="preco[]">' +
            '<label for="preco">Preço</label>' +
            '</div>' +
            '<a href="#" class="remove btn-floating btn-large waves-effect waves-light red"> <i class="material-icons">clear</i></a></div>' +
            '</label>';
        jQuery("button[id='add']").click(function (e: any) {
            jQuery('#inputs_adicionais').append(input);
            jQuery('.preco').maskMoney();
        });

        jQuery('#inputs_adicionais').delegate('a', 'click', function (e: any) {
            e.preventDefault();
            jQuery(this).parent('div').remove();
        });
    }

}