import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ListarUsuarioComponent} from "./listarUsuario.component";
import {CadastroUsuarioComponent} from "./cadastroUsuario.component";
/**
 * Created by Márcio Lucas on 06/10/2016.
 */


const uRouting: Routes = [

    {
        path: 'usuario',
        children: [
            {path: 'listar', component: ListarUsuarioComponent},
            {path: 'cadastrar', component: CadastroUsuarioComponent}
        ]
    },
    // {
    //     path: 'usuario/cadastrar',
    //     component: CadastroUsuarioComponent
    // }
    //
    // {
    //     path: 'listar',
    //     component: ListarUsuarioComponent,
    //     outlet: 'usuario'
    // }
];

export const usuarioRouting: ModuleWithProviders = RouterModule.forChild(uRouting);