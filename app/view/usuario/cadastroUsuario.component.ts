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

    callBack() {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
    }


    cadastrarUsuario() {
        if(this.nome != undefined && this.email != undefined && this.senha != undefined) {
            let body: string;
            body = "q=usuario&nome=" + this.nome + "&email=" + this.email + "&senha=" + this.senha;

            alert(body);

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