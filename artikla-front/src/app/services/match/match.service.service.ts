import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from 'src/app/entidades/autor';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Editor } from 'src/app/entidades/editor';
import { Match } from 'src/app/entidades/match';
import { Usuario } from 'src/app/entidades/user';
import { MatchDto } from 'src/app/entidades/MatchDto';
import * as Cons from '../../helpers/Constantes/constantes';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private API_URL : string = Cons.url;
  
  constructor(private httpClient : HttpClient) {}

  posiblesMatchArticulos(idEditor : number) : Observable<Array<Autor>> {
    return this.httpClient.post<Array<Autor>>(`${this.API_URL}/obtenerPosiblesMatchAutores`, idEditor)
      .pipe(map((response : Array<Autor>) => {
        return response;
    }));
  }

  getEditores(autor:Autor) {
    return this.httpClient.post<Editor[]>(`${this.API_URL}/obtenerEditores`, autor);
  }

  solicitarMatch(match:Match){
    return this.httpClient.post<Match>(`${this.API_URL}/solicitarMatch`,  match);
  }

  descartarMatch(match:Match){
    return this.httpClient.post<Match>(`${this.API_URL}/descartarMatch`,  match);
  }

  obtenerMatchsSolicitados(usuario:Usuario){
    return this.httpClient.post<MatchDto[]>(`${this.API_URL}/obtenerMatchsSolicitados`,  usuario);
  }

  obtenerMatchsRecibidos(usuario:Usuario){
    console.log("llegando a obtener");
    return this.httpClient.post<MatchDto[]>(`${this.API_URL}/obtenerMatchRecibidos`,  usuario);
  }

  aceptarMatch(match:Match){
    return this.httpClient.post<MatchDto>(`${this.API_URL}/aceptarMatch`,  match);
  }

  rechazarMatch(match:Match){
    return this.httpClient.post<MatchDto>(`${this.API_URL}/rechazarMatch`,  match);
  }

  obtenerMatchExitosos(usuario:Usuario){
    return this.httpClient.post<MatchDto[]>(`${this.API_URL}/obtenerMatchExitosos`,  usuario);
  }

  


}
