/**
 * Created by Márcio Lucas on 03/10/2016.
 */
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
var core_1 = require('@angular/core');
var http_service_1 = require("../../services/http.service");
var ListarUsuarioComponent = (function () {
    function ListarUsuarioComponent(httpService) {
        this.httpService = httpService;
    }
    ListarUsuarioComponent.prototype.ngOnInit = function () {
        this.listarUsuario();
    };
    ListarUsuarioComponent.prototype.listarUsuario = function () {
        var _this = this;
        this.httpService.getJSON("Search.php?q=usuario&filtro=1&valorFiltro=1")
            .subscribe(function (data) { return _this.usuarios = data.usuario; }, function (error) { return console.log(error); });
        // alert(this.usuarios);
    };
    ListarUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lista-de-usuarios',
            templateUrl: '../../template/usuario/listarUsuario.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ListarUsuarioComponent);
    return ListarUsuarioComponent;
}());
exports.ListarUsuarioComponent = ListarUsuarioComponent;
//# sourceMappingURL=listarUsuario.component.js.map