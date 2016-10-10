/**
 * Created by Márcio Lucas on 06/10/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {CadastroUsuarioComponent} from "./cadastroUsuario.component";
import {ListarUsuarioComponent} from "./listarUsuario.component";
import {usuarioRouting} from "./usuario.routing";
import {UsuarioComponent} from "./usuario.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        usuarioRouting
    ],
    declarations: [
        CadastroUsuarioComponent,
        ListarUsuarioComponent,
        UsuarioComponent

    ],
    providers: [
        HttpService
    ]
})
export class UsuarioModule {
}
