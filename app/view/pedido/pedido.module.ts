/**
 * Created by Marcio on 09/10/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {pedidoRouting} from "./pedido.routing";
import {HttpService} from "../../services/http.service";
import {PedidoComponent} from "./pedido.component";
import {CadastroPedidoComponent} from "./cadastroPedido.component";
import {ListarPedidoComponent} from "./listarPedido.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        pedidoRouting
    ],
    declarations: [
        PedidoComponent,
        CadastroPedidoComponent,
        ListarPedidoComponent

    ],
    providers: [
        HttpService
    ]
})
export class PedidoModule {
}
