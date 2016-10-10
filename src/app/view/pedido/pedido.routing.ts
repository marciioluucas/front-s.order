import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CadastroPedidoComponent} from "./cadastroPedido.component";
import {ListarPedidoComponent} from "./listarPedido.component";


const pRouting: Routes = [
    {
        path: 'pedidos',
        children: [
            {path: 'listar', component: ListarPedidoComponent},
            {path: 'cadastrar', component: CadastroPedidoComponent}
        ]
    }
];

export const pedidoRouting: ModuleWithProviders = RouterModule.forChild(pRouting);