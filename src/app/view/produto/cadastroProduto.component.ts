/**
 * Created by Márcio Lucas on 05/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Retorno} from "../../model/Retorno";
import {HttpService} from "../../services/http.service";
declare var jQuery: any;
@Component({
    selector: 'cadastro-produto',
    templateUrl: '../../template/produto/frm-cadastro-produto.component.html'
})

export class CadastroProdutoComponent implements OnInit {

    private retorno: Retorno;
    private msg: string = "";
    private isCallback = false;
    private id: number;
    private nome: string;
    private tamanho: string[];
    private preco: number[];
    private idCadastrado: number;


    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        jQuery('input').attr('autocomplete', 'off');
        jQuery('select').material_select();
        this.gerarFormularioPropriedadesProduto();
    }

    callBack() {
        this.msg = this.retorno.msg;
        this.isCallback = true;
        this.idCadastrado = this.retorno.id_cadastrado;
        alert(this.msg);
    }


    cadastrar() {
        if (this.nome != undefined) {

            let body: string;
            var tamanhos = document.getElementsByClassName('tamanhos');
            var precos = document.getElementsByClassName('precos');
            let urlPropriedadesProduto: string = "";
            for (var x = 0; x < tamanhos.length; x++) {
                urlPropriedadesProduto = urlPropriedadesProduto + "&tamanho[" + x + "]=" + (<HTMLInputElement>tamanhos[x]).value;
            }

            for (var y = 0; y < precos.length; y++) {
                urlPropriedadesProduto = urlPropriedadesProduto + "&preco[" + y + "]=" + (<HTMLInputElement>precos[y]).value.replace(",", "");
            }
            body = "q=produto&nome=" + this.nome + urlPropriedadesProduto;
            // alert(body);
            this.httpService.postJSON("Insert.php",
                body)
                .subscribe(
                    data => this.retorno = data,
                    error => console.log(error),
                    () => this.callBack()
                )
        }
    }


    gerarFormularioPropriedadesProduto() {
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

}