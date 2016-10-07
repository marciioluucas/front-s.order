/**
 * Created by Márcio Lucas on 03/10/2016.
 */

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProdutoComponent} from "./view/produto/produto.component";
import {UsuarioComponent} from "./view/usuario/usuario.component";


const appRoutes: Routes = [
        // {
        //
        //     path: 'listar',
        //     component: ListarUsuarioComponent
        //
        // },
        // {
        //
        //     path: 'sortear',
        //     component: SorteioComponent,
        //
        // },
        // {
        //     path: 'cadastro',
        //     component: CadastroUsuarioComponent
        // },
        {
            path: '',
            redirectTo: '/usuario',
            pathMatch: 'full'
        },
        {
            path: 'produto',
            component: ProdutoComponent
        },
        {
            path: 'usuario',
            component: UsuarioComponent
        }
    ]
    ;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
