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
 * Created by Marcio on 09/10/2016.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var pedido_routing_1 = require("./pedido.routing");
var http_service_1 = require("../../services/http.service");
var pedido_component_1 = require("./pedido.component");
var cadastroPedido_component_1 = require("./cadastroPedido.component");
var listarPedido_component_1 = require("./listarPedido.component");
var PedidoModule = (function () {
    function PedidoModule() {
    }
    PedidoModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                pedido_routing_1.pedidoRouting
            ],
            declarations: [
                pedido_component_1.PedidoComponent,
                cadastroPedido_component_1.CadastroPedidoComponent,
                listarPedido_component_1.ListarPedidoComponent
            ],
            providers: [
                http_service_1.HttpService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PedidoModule);
    return PedidoModule;
}());
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map