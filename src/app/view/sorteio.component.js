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
var http_service_1 = require("../services/http.service");
var SorteioComponent = (function () {
    function SorteioComponent(httpService) {
        this.httpService = httpService;
        this.isSorteado = false;
    }
    SorteioComponent.prototype.ngOnInit = function () {
        this.pegarUsuarios();
    };
    SorteioComponent.prototype.pegarUsuarios = function () {
        var _this = this;
        this.httpService.getJSON("http://192.168.0.104/apiTest/Angular/application/back/api/Search.php?q=usuario&filtro=1&valorFiltro=1")
            .subscribe(function (data) { return _this.usuarios = data.usuario; }, function (error) { return console.log(error); });
    };
    SorteioComponent.prototype.sortear = function () {
        this.pegarUsuarios();
        this.nResult = Math.floor(Math.random() * this.usuarios.length);
        document.querySelector('.sorteio').innerHTML = "" +
            "<h1>Usuário sorteado! " + this.usuarios[this.nResult].nome + "</h1>" +
            "<h2>Nome:" + this.usuarios[this.nResult].nome + "</h2>" +
            "<h2>E-mail: " + this.usuarios[this.nResult].email + "</h2>" +
            "<h2>ID: " + this.usuarios[this.nResult].id + "</h2>";
        this.isSorteado = true;
    };
    SorteioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sorteio',
            templateUrl: '../template/sorteio.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], SorteioComponent);
    return SorteioComponent;
}());
exports.SorteioComponent = SorteioComponent;
//# sourceMappingURL=sorteio.component.js.map