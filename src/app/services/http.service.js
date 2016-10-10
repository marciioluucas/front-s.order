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
 * Criado por Márcio Lucas on 12/08/2016.
 * - marciioluucas@gmail.com
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        //Variável para definir de onde vai requisitar os jsons nos métodos abaixo.
        this.enderecoAPI = "http://192.168.0.101/apiTest/Angular/application/back/api/";
    }
    //@DOC:
    //Este método é responsável por fazer a requisisção GET no servidor da API
    //Ele retorna um JSON que é fornecido pela API
    HttpService.prototype.getJSON = function (url) {
        var enderecoAPICompleto = this.enderecoAPI + url;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
        try {
            return this.http.get(enderecoAPICompleto)
                .map(function (res) { return res.json(); });
        }
        catch (Erro) {
            console.log('Erro na requisição HTTP GET' + Erro.message);
        }
    };
    //@DOC:
    //Este método é responsável por fazer a requisisção POST no servidor da API
    //Ele retorna um JSON que é fornecido pela API
    HttpService.prototype.postJSON = function (url, body) {
        var enderecoAPICompleto = this.enderecoAPI + url;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        try {
            return this.http
                .post(enderecoAPICompleto, body, { headers: headers })
                .map(function (response) { return response.json(); });
        }
        catch (Erro) {
            console.log('Erro na requisição HTTP POST' + Erro.message);
        }
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
// EXEMPLO POST
// authenticate(username, password) {
//   var body = `username=${username}&password=${password}`;
//   var headers = new Headers();
//   headers.append('Content-Type', 'application/x-www-form-urlencoded');
//
//   this.http
//       .post('http://localhost:3001/sessions/create', body, { headers: headers })
//       .map(response => response.json())
//       .subscribe(
//           response => this.storeToken(response.id_token),
//           this.logError,
//           () => console.log('Authentication Complete')
//       );
// }
//# sourceMappingURL=http.service.js.map