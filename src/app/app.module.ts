import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppComponent}  from './app.component';
import {HttpService} from "./services/http.service";
import {routing} from "./app.routing";
import {LayoutComponent} from "./view/layout.component";
import {SorteioComponent} from "./view/sorteio.component";
import {UsuarioModule} from "./view/usuario/usuario.module";
import {ProdutoModule} from "./view/produto/produto.module";
import {PedidoModule} from "./view/pedido/pedido.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        UsuarioModule,
        ProdutoModule,
        PedidoModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        SorteioComponent
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
