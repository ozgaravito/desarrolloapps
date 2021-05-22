import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { ArticuloDto, ArticuloMatch } from 'src/app/entidades/ArticuloDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { Editor } from 'src/app/entidades/editor';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Autor } from 'src/app/entidades/autor';
import { RespuestasWS } from 'src/app/helpers/Constantes/respuestasWS';
import { Match } from 'src/app/entidades/match';

@Component({
  selector: 'app-match-editor',
  templateUrl: './match-editor.component.html',
  styleUrls: ['./match-editor.component.css']
})
export class MatchEditorComponent implements OnInit {
  public status : StatusPage;
  public articulosMatch : Array<ArticuloMatch> = [];
  public articulo:ArticuloDto;

  public editor:Editor;
  public match:Match;
  public usuarios:TIPO_USUARIO;
  
  constructor(public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.obtenerMatchAutores(); 
  }

  obtenerMatchAutores() {
      this._matchService.posiblesMatchArticulos(this.status.obtenerUsuarioLocalStorage().id).subscribe((autores : Array<Autor>) => {
        console.log(autores);
        this.obtenerArticulosAutores(autores);
      }, error => {
        console.log(error);
      });
  }

  obtenerArticulosAutores(autores : Array<Autor>) {
    autores.forEach(autor => {
      autor.articulos.forEach(articulo => {
        let articuloMatch : ArticuloMatch = {
          id: articulo.id,
          titulo: articulo.titulo,
          descripcion: articulo.descripcion,
          categorias: articulo.categorias,
          autor: autor
        }
        this.articulosMatch.push(articuloMatch);
      });
    });
    this.reordenarArticulos();
  }
  
  reordenarArticulos() {
    for(let i = this.articulosMatch.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = this.articulosMatch[i]
      this.articulosMatch[i] = this.articulosMatch[j]
      this.articulosMatch[j] = temp
    }
    console.log(this.articulosMatch);
  }

  solicitarMatchToArticulo(articulo:ArticuloDto){

    this.articulo = articulo;
    console.log("solicitar match clicked");
    console.log(articulo.autor.id);

     this.match = {
       id_editor : this.status.obtenerUsuarioLocalStorage().id,
       id_autor: articulo.autor.id,
       id_articulo_match : articulo.id,
       usuario_solicitante :  this.status.obtenerUsuarioLocalStorage().id,
       usuario_solicitado : articulo.autor.id
    }

       this._matchService.solicitarMatch(this.match).subscribe(data=>{
         alert("Match solicitado correctamente");
        console.log(this.match);
        this.match = {}
        this.articulosMatch = [];
        this.obtenerMatchAutores(); 
      });

  }


  descartarMatch(articulo:ArticuloDto){
    this.articulo = articulo;

    console.log("descartar match clicked");

    this.match = {
      id_editor : this.status.obtenerUsuarioLocalStorage().id,
      id_autor: articulo.autor.id,
      id_articulo_match : articulo.id,
   }

      this._matchService.descartarMatch(this.match).subscribe(data=>{
        alert("Candidato match descartado");
       console.log(this.match);
       this.match = {}
       this.articulosMatch = [];
       this.obtenerMatchAutores();
      });
  }

  validarUsuarioEnSesion(){
    if(this.status.obtenerUsuarioLocalStorage().rol == TIPO_USUARIO.EDITOR ){
      return TIPO_USUARIO.EDITOR;
    }else{
      return TIPO_USUARIO.EDITOR;
    }
  }













  // solicitudMatch(articuloMatch : ArticuloMatch) {
  //   console.log(articuloMatch);
  //   let matchSolicitud : Match  = {
  //     id_editor: this.status.obtenerUsuarioLocalStorage().id,
      
  //   }
  //   this._matchService.solicitarMatch(arti).subscribe((respuesta : RespuestasWS) => {
  //     console.log(respuesta);
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
