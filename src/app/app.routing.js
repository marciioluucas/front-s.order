/**
 * Created by Márcio Lucas on 03/10/2016.
 */
"use strict";
var router_1 = require('@angular/router');
var produto_component_1 = require("./view/produto/produto.component");
var usuario_component_1 = require("./view/usuario/usuario.component");
var pedido_component_1 = require("./view/pedido/pedido.component");
var appRoutes = [
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
        component: produto_component_1.ProdutoComponent
    },
    {
        path: 'usuario',
        component: usuario_component_1.UsuarioComponent
    },
    {
        path: 'pedidos',
        component: pedido_component_1.PedidoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map