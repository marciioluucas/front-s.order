import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./services/http.service";
import {CadastroUsuarioComponent} from "./view/usuario/cadastroUsuario.component";
import {ListarUsuarioComponent} from "./view/usuario/listarUsuario.component";
import {routing} from "./app.routing";
import {LayoutComponent} from "./view/layout.component";
import {SorteioComponent} from "./view/sorteio.component";
import {MaterialModule} from "@angular/material";
import {CadastroProdutoComponent} from "./view/produto/cadastroProduto.component";
import {CadastroPedidoComponent} from "./view/pedido/cadastroPedido.component";
import {ProdutoComponent} from "./view/produto/produto.component";
import {UsuarioModule} from "./view/usuario/usuario.module";
import {ProdutoModule} from "./view/produto/produto.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule.forRoot(),
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
