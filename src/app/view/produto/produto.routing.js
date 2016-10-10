"use strict";
var router_1 = require("@angular/router");
var listarProduto_component_1 = require("./listarProduto.component");
var cadastroProduto_component_1 = require("./cadastroProduto.component");
/**
 * Created by Marcio Lucas on 07/10/2016.
 */
var pRouting = [
    {
        path: 'produto',
        children: [
            { path: 'listar', component: listarProduto_component_1.ListarProdutoComponent },
            { path: 'cadastrar', component: cadastroProduto_component_1.CadastroProdutoComponent }
        ]
    },
];
exports.produtoRouting = router_1.RouterModule.forChild(pRouting);
//# sourceMappingURL=produto.routing.js.map