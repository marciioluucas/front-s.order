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
var CadastroUsuarioComponent = (function () {
    function CadastroUsuarioComponent(httpService) {
        this.httpService = httpService;
        this.msg = "";
        this.isCallback = false;
    }
    CadastroUsuarioComponent.prototype.ngOnInit = function () {
    };
    //metodo de retorno
    CadastroUsuarioComponent.prototype.callBack = function () {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
    };
    CadastroUsuarioComponent.prototype.cadastrarUsuario = function () {
        var _this = this;
        if (this.nome != undefined && this.email != undefined && this.senha != undefined) {
            var body = void 0;
            body = "q=usuario&nome=" + this.nome + "&email=" + this.email + "&senha=" + this.senha;
            //só precisa passar o nome do arquivo responsável por retornar o json como parametro,
            //junto com os parametros http na variável body
            this.httpService.postJSON("Insert.php", body)
                .subscribe(function (data) { return _this.retorno = data; }, function (error) { return console.log(error); }, function () { return _this.callBack(); });
        }
    };
    CadastroUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro-usuario',
            templateUrl: '../../template/usuario/frm-cadastro-usuario.component.html',
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());
exports.CadastroUsuarioComponent = CadastroUsuarioComponent;
//# sourceMappingURL=cadastroUsuario.component.js.map