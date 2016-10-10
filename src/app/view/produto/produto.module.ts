import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule}      from '@angular/core';
import {HttpService} from "../../services/http.service";
import {CadastroProdutoComponent} from "./cadastroProduto.component";
import {ListarProdutoComponent} from "./listarProduto.component";
import {ProdutoComponent} from "./produto.component";
import {PropriedadesProdutoComponent} from "./propriedadesProduto.component";
import {usuarioRouting} from "../usuario/usuario.routing";
/**
 * Created by Márcio Lucas on 07/10/2016.
 */

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        usuarioRouting
    ],
    declarations: [
        CadastroProdutoComponent,
        ListarProdutoComponent,
        ProdutoComponent,
        PropriedadesProdutoComponent
    ],
    providers: [
        HttpService
    ]
})
export class ProdutoModule {
}

