import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login, Usuario } from 'src/app/entidades/user';
import * as Cons from '../../helpers/Constantes/constantes';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private API_URL : string = Cons.url;
  
  constructor(private httpClient : HttpClient) {}

  /**
   *En caso de encontrar el usuario retorna el ID:
   * @param login 
   */
  login(login : Login) : Observable<number> {
    return this.httpClient.post<number>(`${this.API_URL}/iniciarSesion`, login)
      .pipe(map((idRespuesta : number) => {
        return idRespuesta;
      }));
  }

  /**
   * Obtener usuario registrado por ID
   * @param id 
   */
  obtenerUsuarioPorId(id : number) : Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.API_URL}/obtenerUsuarioPorId`, id)
      .pipe(map((response : Usuario) => {
        return response;
    }));
  }

  editarUsuario(usuario:Usuario){
    console.log("llegando");
    console.log(usuario);
    return this.httpClient.put<Usuario>(this.API_URL+"/actualizarUsuario", usuario);
  }

}