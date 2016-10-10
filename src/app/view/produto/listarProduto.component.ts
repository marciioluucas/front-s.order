/**
 * Created by Márcio Lucas on 07/10/2016.
 */
import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Produto} from "../../model/Produto";

@Component({
    selector: 'lista-de-produtos',
    templateUrl: '../../template/produto/listar-produto.component.html'
})
export class ListarProdutoComponent implements OnInit {

    private produtos: Produto[];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.listarProduto();
    }

    listarProduto() {

        this.httpService.getJSON("Search.php?q=produto&filtro=1&valorFiltro=1")
            .subscribe(
                data => this.produtos = data.usuario,
                error =>console.log(error)
            );
        // alert(this.usuarios);
    }
}