import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticuloDto } from '../../entidades/ArticuloDto';
import { Categoria } from '../../entidades/Categoria';
import { map } from 'rxjs/operators';
import * as Cons from '../../helpers/Constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL : string = Cons.url;


  constructor(private http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.API_URL}/obtenerCategorias`);
  }

}
