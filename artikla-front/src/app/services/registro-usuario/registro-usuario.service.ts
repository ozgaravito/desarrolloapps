import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/entidades/Autor';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';
import { Editor } from 'src/app/entidades/editor';
import * as Cons from '../../helpers/Constantes/constantes';


@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
 // private API_URL : string = "http://localhost:8080";
  private API_URL : string = Cons.url;
  
  constructor(private httpClient : HttpClient) {}

  registrarAutor(autor : Autor) : Observable<RespuestaWS> {
    return this.httpClient.post<RespuestaWS>(`${this.API_URL}/crearAutor`, autor)
      .pipe(map((response : RespuestaWS) => {
        return response;
    }));
  }

  registrarEditor(editor : Editor) : Observable<RespuestaWS> {
    console.log(editor);
    return this.httpClient.post<RespuestaWS>(`${this.API_URL}/crearEditor`, editor)
      .pipe(map((response : RespuestaWS) => {
        return response;
    }));
  }

}
