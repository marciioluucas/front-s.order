import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CadastroPedidoComponent} from "./cadastroPedido.component";


const pRouting: Routes = [

    { path: '/cadastro', component: CadastroPedidoComponent }
];

export const pedidoRouting: ModuleWithProviders = RouterModule.forChild(pRouting);