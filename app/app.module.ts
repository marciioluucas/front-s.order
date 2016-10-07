import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {HttpService} from "./services/http.service";
import {routing} from "./app.routing";
import {LayoutComponent} from "./view/layout.component";
import {SorteioComponent} from "./view/sorteio.component";
import {CadastroPedidoComponent} from "./view/pedido/cadastroPedido.component";
import {UsuarioModule} from "./view/usuario/usuario.module";
import {ProdutoModule} from "./view/produto/produto.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        UsuarioModule,
        ProdutoModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        SorteioComponent,
        CadastroPedidoComponent
    ],
    providers: [
        HttpService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
