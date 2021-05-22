import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Autor } from 'src/app/entidades/autor';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { Editor } from 'src/app/entidades/editor';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Usuario } from 'src/app/entidades/user';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public articulosMatch : Array<ArticuloDto>;
  public isEditor : boolean = false;
  public editoresMatch: Array<Editor>;

  editor:Editor;
  usuarios:TIPO_USUARIO;

  public status : StatusPage;
  
  constructor(public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    // this.status = new StatusPage(this.router);

    // this.status.obtenerUsuarioLocalStorage();
    // if(this.status.obtenerUsuarioLocalStorage().rol === TIPO_USUARIO.AUTOR){

    //   this.obtenerMatchEditores();
    //   this.isEditor = false;

    // }else if(this.status.obtenerUsuarioLocalStorage().rol === TIPO_USUARIO.EDITOR){

    //   this.obtenerMatchAutores();
    //   this.isEditor = true;

    // }
   
  }

  // obtenerMatchAutores() {
  //     this._matchService.posiblesMatchArticulos().subscribe((autores : Array<ArticuloDto>) => {
  //       this.articulosMatch = autores;
  //       console.log(this.articulosMatch);
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // obtenerMatchEditores(){
  //   this._matchService.getEditores().subscribe(data =>{
  //   this.editoresMatch = data;
  //   console.log(this.editoresMatch);
  //   });
  // }


  // solicitarMatch(usuario:Usuario){

  // }
}
