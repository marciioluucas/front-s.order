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
 * Created by Márcio Lucas on 05/10/2016.
 */
var core_1 = require('@angular/core');
var http_service_1 = require("../../services/http.service");
var CadastroProdutoComponent = (function () {
    function CadastroProdutoComponent(httpService) {
        this.httpService = httpService;
        this.msg = "";
        this.isCallback = false;
    }
    CadastroProdutoComponent.prototype.ngOnInit = function () {
        jQuery('input').attr('autocomplete', 'off');
        jQuery('select').material_select();
        this.gerarFormularioPropriedadesProduto();
    };
    CadastroProdutoComponent.prototype.callBack = function () {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
        alert(this.msg);
    };
    CadastroProdutoComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.nome != undefined) {
            var body = void 0;
            var tamanhos = document.getElementsByClassName('tamanhos');
            var precos = document.getElementsByClassName('precos');
            var urlPropriedadesProduto = "";
            for (var x = 0; x < tamanhos.length; x++) {
                urlPropriedadesProduto = urlPropriedadesProduto + "&tamanho[" + x + "]=" + tamanhos[x].value;
            }
            for (var y = 0; y < precos.length; y++) {
                urlPropriedadesProduto = urlPropriedadesProduto + "&preco[" + y + "]=" + precos[y].value.replace(",", "");
            }
            body = "q=produto&nome=" + this.nome + urlPropriedadesProduto;
            // alert(body);
            this.httpService.postJSON("Insert.php", body)
                .subscribe(function (data) { return _this.retorno = data; }, function (error) { return console.log(error); }, function () { return _this.callBack(); });
        }
    };
    CadastroProdutoComponent.prototype.gerarFormularioPropriedadesProduto = function () {
        var input = "" +
            '<label class="row">' +
            '<div class="row">' +
            '<div class="input-field col s7">' +
            '<input id="" type="text" class="tamanhos" name="tamanho[]">' +
            '<label for="tamanho">Tamanho</label>' +
            '</div>' +
            '<div class="input-field col s3">' +
            '<input id="" type="text" class="precos" name="preco[]">' +
            '<label for="preco">Preço</label>' +
            '</div>' +
            '<div class="col s2"><a href="#" class="remove btn-floating btn-large waves-effect waves-light red"> <i class="material-icons">clear</i></a></div></div>' +
            '</label>';
        jQuery("button[id='add']").click(function (e) {
            jQuery('#inputs_adicionais').append(input);
            jQuery('.precos').maskMoney({
                prefix: 'R$ ',
                allowNegative: true,
                thousands: '',
                decimal: '.',
                affixesStay: false
            });
            jQuery('input').attr('autocomplete', 'off');
        });
        jQuery('#inputs_adicionais').delegate('a', 'click', function (e) {
            e.preventDefault();
            jQuery(this).parent('div').parent('div').remove();
        });
    };
    CadastroProdutoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro-produto',
            templateUrl: '../../template/produto/frm-cadastro-produto.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CadastroProdutoComponent);
    return CadastroProdutoComponent;
}());
exports.CadastroProdutoComponent = CadastroProdutoComponent;
//# sourceMappingURL=cadastroProduto.component.js.map