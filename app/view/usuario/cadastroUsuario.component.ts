import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Http} from "@angular/http";
import {Retorno} from "../../model/Retorno";

@Component({
    moduleId: module.id,
    selector: 'cadastro-usuario',
    templateUrl: '../../template/usuario/frm-cadastro-usuario.component.html',
    providers: [HttpService]
})
export class CadastroUsuarioComponent implements OnInit {

    private retorno: Retorno;
    private msg: string = "";
    private isCallback = false;
    private nome: string;
    private email: string;
    private senha: string;
    private idCadastrado: number;


    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
    }

    //metodo de retorno
    callBack() {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
    }


    cadastrarUsuario() {
        if (this.nome != undefined && this.email != undefined && this.senha != undefined) {
            let body: string;
            body = "q=usuario&nome=" + this.nome + "&email=" + this.email + "&senha=" + this.senha;

            //só precisa passar o nome do arquivo responsável por retornar o json como parametro,
            //junto com os parametros http na variável body
            this.httpService.postJSON("Insert.php",
                body)
                .subscribe(
                    data => this.retorno = data,
                    error => console.log(error),
                    () => this.callBack()
                )
        }
    }


}