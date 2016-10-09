/**
 * Created by Márcio Lucas on 03/10/2016.
 */

import {Component, OnInit, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Usuario} from "../../model/Usuario";

@Component({
    moduleId: module.id,
    selector: 'lista-de-usuarios',
    templateUrl: '../../template/usuario/listarUsuario.component.html',
    providers: [HttpService]
})
export class ListarUsuarioComponent implements OnInit {

    private usuarios: Usuario[];


    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.listarUsuario();
    }


    listarUsuario() {

        this.httpService.getJSON("Search.php?q=usuario&filtro=1&valorFiltro=1")
            .subscribe(
                data => this.usuarios = data.usuario,
                error =>console.log(error)
            );
        // alert(this.usuarios);
    }



}