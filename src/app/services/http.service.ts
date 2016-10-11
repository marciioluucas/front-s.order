/**
 * Criado por Márcio Lucas on 12/08/2016.
 * - marciioluucas@gmail.com
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
    //Variável para definir de onde vai requisitar os jsons nos métodos abaixo.
    enderecoAPI: string = "http://192.168.0.104/apiTest/Angular/application/back/api/";


    constructor(private http: Http) {
    }

    //@DOC:
    //Este método é responsável por fazer a requisisção GET no servidor da API
    //Ele retorna um JSON que é fornecido pela API
    getJSON(url: string) {
        var enderecoAPICompleto: string = this.enderecoAPI + url;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
        try {
            return this.http.get(enderecoAPICompleto)
                .map((res: Response) => res.json())


        } catch (Erro) {
            console.log('Erro na requisição HTTP GET' + Erro.message)
        }
    }


    //@DOC:
    //Este método é responsável por fazer a requisisção POST no servidor da API
    //Ele retorna um JSON que é fornecido pela API
    postJSON(url: string, body: string) {
        var enderecoAPICompleto: string = this.enderecoAPI + url;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        try {

            return this.http
                .post(enderecoAPICompleto, body, {headers: headers})
                .map(response => response.json())
        }
        catch (Erro) {
            console.log('Erro na requisição HTTP POST' + Erro.message)
        }
    }


}

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
