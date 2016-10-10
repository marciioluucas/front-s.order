"use strict";
var router_1 = require('@angular/router');
var cadastroPedido_component_1 = require("./cadastroPedido.component");
var listarPedido_component_1 = require("./listarPedido.component");
var pRouting = [
    {
        path: 'pedidos',
        children: [
            { path: 'listar', component: listarPedido_component_1.ListarPedidoComponent },
            { path: 'cadastrar', component: cadastroPedido_component_1.CadastroPedidoComponent }
        ]
    }
];
exports.pedidoRouting = router_1.RouterModule.forChild(pRouting);
//# sourceMappingURL=pedido.routing.js.map