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
    private produtoTamanhos: any[];
    private produtoSelecionado: Produto;
    private indexProduto: number;
    private indexTamanho: number;
    private render: boolean = false;
    private preco: number = 0.00;


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

    //
    // criarDadosParaAutoComplete() {
    //     let xablau: string = "{\n";
    //     for (var i = 0; i < this.produtos.length; i++) {
    //         if (i != this.produtos.length - 1) {
    //             xablau += "\"" + this.produtos[i].nome + "\" : " + null + ",\n";
    //         } else {
    //             xablau += "\"" + this.produtos[i].nome + "\" : " + null + "\n";
    //         }
    //     }
    //     xablau += "}";
    //
    //     this.dados = JSON.parse(xablau);
    // }

    carregarTamanhosSelect(obj: any) {

        let idProduto = (<HTMLSelectElement>obj.srcElement).value;


        if (parseInt(idProduto) != 0) {
            this.indexProduto = (<HTMLSelectElement>obj.srcElement).selectedIndex;
            // this.listarTamanhoPrecoProduto(idProduto);
            this.produtoSelecionado = this.produtos[this.indexProduto - 1];
            this.render = true;

        }
        this.listarTamanhoPrecoProduto(idProduto);
    }


    carregarPrecosDoSelectTamanho(obj: any) {

        this.indexTamanho = (<HTMLSelectElement>obj.srcElement).selectedIndex;
        // this.listarTamanhoPrecoProduto(idProduto);
        this.preco = this.produtoSelecionado.precos[this.indexTamanho - 1];

        // this.listarTamanhoPrecoProduto(idProduto);
    }

    criarDadosParaSelect() {
        let str: string = "<option value='0' selected>Selecione o produto</option>";
        for (var i = 0; i < this.produtos.length; i++) {
            str += "<option value='" + this.produtos[i].id + "'>" + this.produtos[i].nome + "</option>\n";
        }

        return str.toString();
    }

    gerarProdutos() {

        var input =
            `<div class="row">
                                <div class="input-field col s7">
                                    <!--<input type="text" class="produtos" name="produto[]" autocomplete="off">-->
                                    <select name="produto[]" id="produto0" class="produtos browser-default" onchange="">
                                        <option value="0" selected>Selecione o produto</option>
                                        `+this.criarDadosParaSelect()+`
                                    </select>
                                    <label for="produto0"></label>
                                </div>
                                <div class="input-field col s3">
                                    <select name="tamanho[]" class="tamanhos browser-default" id="tamanho0" onchange="">
                                        <option value="" selected>Selecione o tamanho</option>
                                        <template [ngIf]="produtoSelecionado != undefined ? true : false">
                                            <option  value="{{tamanho}}" *ngFor="let tamanho of produtoSelecionado.tamanhos">{{tamanho}}</option>
                                        </template>
                                    </select>
                                    <!--<label for="tamanho0">Tamanho</label>-->
                                </div>

                                <div class="input-field col s1">
                                    <input type="text" name="preco[]" disabled [(ngModel)]="preco"/>
                                </div>
                                <div class="col s1">
                                    <button
                                            class="btn-floating btn-large waves-effect waves-light red remove">
                                        <i class="material-icons">clear</i></button>
                                </div>
                            </div>`;
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
                error =>console.log(error)
            );
    }

    listarTamanhoPrecoProduto(idProduto) {


        this.httpService.getJSON("Search.php?q=produto&typeSearch=precos-e-tamanhos&idProduto=" + idProduto)
            .subscribe(
                data => this.produtoSelecionado = data,
                error => console.log(error)
            );

    }

}