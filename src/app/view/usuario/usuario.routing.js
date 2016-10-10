"use strict";
var router_1 = require("@angular/router");
var listarUsuario_component_1 = require("./listarUsuario.component");
var cadastroUsuario_component_1 = require("./cadastroUsuario.component");
/**
 * Created by Márcio Lucas on 06/10/2016.
 */
var uRouting = [
    {
        path: 'usuario',
        children: [
            { path: 'listar', component: listarUsuario_component_1.ListarUsuarioComponent },
            { path: 'cadastrar', component: cadastroUsuario_component_1.CadastroUsuarioComponent }
        ]
    },
];
exports.usuarioRouting = router_1.RouterModule.forChild(uRouting);
//# sourceMappingURL=usuario.routing.js.map