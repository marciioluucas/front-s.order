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


    constructor(private httpService: HttpService) {

    }

    ngOnInit() {
        this.listarProduto();
        this.gerarProdutos();
        this.criarDadosParaAutoComplete();
    }


    autoComplete() {
        jQuery('.produtos').autocomplete({
            data: this.dados
        });
    }

    resetDados(){
        this.dados = "";
    }

    criarDadosParaAutoComplete() {
        let xablau:string = "{\n";
        for (var i = 0; i < this.produtos.length; i++) {
            if(i != this.produtos.length - 1) {
                xablau += "\""+this.produtos[i].nome+"\" : "+null+",\n";
            }else{
                xablau += "\""+this.produtos[i].nome+"\" : "+null+"\n";
            }
        }
        xablau += "}";

        this.dados = JSON.parse(xablau);

    }

    gerarProdutos() {
        var input = "" +
            '<label class="row">' +
            '<div class="row">' +
            '<div class="input-field col s7">' +
            '<input type="text" class="produtos" name="produto[]">' +
            '<label>Produtos</label>' +
            '</div>' +
            '<div class="input-field col s3">' +
            '<input type="text" class="tamanhos" name="tamanho[]">' +
            '<label>Tamanhos</label>' +
            '</div>' +
            '<div class="col s2"><a href="#" class="remove btn-floating btn-large waves-effect waves-light red">' +
            '<i class="material-icons">clear</i></a></div>' +
            '</div>' +
            '</label>';
        jQuery("button[id='add']").click(function (e: any) {
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

        jQuery('#inputs_adicionais').delegate('a', 'click', function (e: any) {
            e.preventDefault();
            jQuery(this).parent('div').parent('div').remove();
        });
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
                error =>console.log(error)
            );
    }
}