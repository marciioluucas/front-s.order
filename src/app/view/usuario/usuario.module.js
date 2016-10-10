"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Márcio Lucas on 06/10/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var http_service_1 = require("../../services/http.service");
var cadastroUsuario_component_1 = require("./cadastroUsuario.component");
var listarUsuario_component_1 = require("./listarUsuario.component");
var usuario_routing_1 = require("./usuario.routing");
var usuario_component_1 = require("./usuario.component");
var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                usuario_routing_1.usuarioRouting
            ],
            declarations: [
                cadastroUsuario_component_1.CadastroUsuarioComponent,
                listarUsuario_component_1.ListarUsuarioComponent,
                usuario_component_1.UsuarioComponent
            ],
            providers: [
                http_service_1.HttpService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map