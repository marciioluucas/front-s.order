/**
 * Created by Márcio Lucas on 05/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Produto} from "../../model/Produto";
declare var jQuery: any;
@Component({
    selector: 'cadastro-pedido',
    templateUrl: '../../template/pedido/frm-cadastro-pedido.component.html'
})
export class CadastroPedidoComponent implements OnInit {

    private produtos: Produto[];
    private dados: string;
    private contador: number = 1;


    constructor(private httpService: HttpService) {


    }

    ngOnInit() {
        this.listarProduto();
        jQuery(document).ready(function () {
            jQuery('#inputs_adicionais').fadeIn();
            jQuery('#add').fadeIn();

            jQuery('#produto0').material_select();
            jQuery('#tamanho0').material_select();
        });

    }

    ngAfterViewInit() {
    }

    criarDadosParaAutoComplete() {
        let xablau: string = "{\n";
        for (var i = 0; i < this.produtos.length; i++) {
            if (i != this.produtos.length - 1) {
                xablau += "\"" + this.produtos[i].nome + "\" : " + null + ",\n";
            } else {
                xablau += "\"" + this.produtos[i].nome + "\" : " + null + "\n";
            }
        }
        xablau += "}";

        this.dados = JSON.parse(xablau);
    }

    criarDadosParaSelect() {
        let str: string = "<option value='' selected>Selecione o produto</option>";
        for (var i = 0; i < this.produtos.length; i++) {
            str += "<option value='" + this.produtos[i].id + "'>" + this.produtos[i].nome + "</option>\n";
        }

        return str.toString();
    }

    gerarProdutos() {

        var input =

            '<div class="row">' +
            "<div class='input-field col s7'>" +
            "<select type='text' class='produtos' id='produto" + this.contador + "' name='produto[]' >" + this.criarDadosParaSelect() + "</select>" +
            '<label for="produto' + this.contador + '">Nome do produto</label>' +
            '</div>' +
            '<div class="input-field col s3">' +
            '<select type="text" class="tamanhos" id="tamanho"' + this.contador + ' name="tamanho[]"></select>' +
            '<label for="tamanho' + this.contador + '">Tamanhos</label>' +
            '</div>' +
            '<div class="col s2"><a href="#" class="remove btn-floating btn-large waves-effect waves-light red">' +
            '<i class="material-icons">clear</i></a></div>' +
            '</div>';
        jQuery('#inputs_adicionais').append(input);
        jQuery('.precos').maskMoney({
            prefix: 'R$ ',
            allowNegative: true,
            thousands: '',
            decimal: '.',
            affixesStay: false
        });
        jQuery("#produto" + this.contador).material_select();
        jQuery("#tamanho" + this.contador).material_select();
        jQuery('input').attr('autocomplete', 'off');

        jQuery('#inputs_adicionais').delegate('.remove', 'click', function (e: any) {
            e.preventDefault();
            jQuery(this).parent('div').parent('div').remove();
        });
        this.contador++;
    }

    listarProduto() {
        this.httpService.getJSON("Search.php?q=produto&filtro=1&valorFiltro=1")
            .subscribe(
                data => this.produtos = data.produto,
                error =>console.log(error),
                () => this.criarDadosParaAutoComplete()
            );
    }

    listarTamanhoProduto() {
        this.httpService.getJSON("Search.php?q=produto&typeSearch=precos-e-tamanhos")
            .subscribe(
                data => this.produtos = data.produto,
                error =>console.log(error),
                () => console.log("SUCESSO!")
            );
    }
}