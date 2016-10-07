import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListarProdutoComponent} from "./listarProduto.component";
import {CadastroProdutoComponent} from "./cadastroProduto.component";
/**
 * Created by Marcio Lucas on 07/10/2016.
 */

const pRouting: Routes = [

    {
        path: 'produto',
        children: [
            {path: 'listar', component: ListarProdutoComponent},
            {path: 'cadastrar', component: CadastroProdutoComponent}
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

export const produtoRouting: ModuleWithProviders = RouterModule.forChild(pRouting);