/**
 * Created by Márcio Lucas on 03/10/2016.
 */


import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import {Usuario} from "../model/Usuario";

@Component({
    moduleId: module.id,
    selector: 'sorteio',
    templateUrl: '../template/sorteio.component.html',
    providers: [HttpService]
})
export class SorteioComponent implements OnInit {

    private usuarios: Usuario[];
    private nResult: number;
    private isSorteado: boolean = false;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.pegarUsuarios();
    }

    pegarUsuarios() {
        this.httpService.getJSON("http://192.168.0.104/apiTest/Angular/application/back/api/Search.php?q=usuario&filtro=1&valorFiltro=1")
            .subscribe(
                data => this.usuarios = data.usuario,
                error =>console.log(error)
            );
    }

    sortear() {
        this.pegarUsuarios();
        this.nResult = Math.floor(Math.random() * this.usuarios.length);

        document.querySelector('.sorteio').innerHTML = "" +
            "<h1>Usuário sorteado! " + this.usuarios[this.nResult].nome + "</h1>" +
            "<h2>Nome:" + this.usuarios[this.nResult].nome + "</h2>" +
            "<h2>E-mail: " + this.usuarios[this.nResult].email + "</h2>" +
            "<h2>ID: " + this.usuarios[this.nResult].id + "</h2>";
        this.isSorteado = true;
    }
}