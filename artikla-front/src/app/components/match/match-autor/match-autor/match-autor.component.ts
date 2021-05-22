import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Autor } from 'src/app/entidades/autor';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Editor } from 'src/app/entidades/editor';
import { Match } from 'src/app/entidades/match';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-match-autor',
  templateUrl: './match-autor.component.html',
  styleUrls: ['./match-autor.component.css']
})
export class MatchAutorComponent implements OnInit {

  public status : StatusPage;
  public editoresMatch: Array<Editor>;
  public match:Match;
  public matchDto:FormGroup;
  tipo:TIPO_USUARIO;
  editor:Editor;
  autor:Autor;
  

  constructor(public formBuilder:FormBuilder, public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.obtenerMatchEditores();
  
  }

  obtenerMatchEditores(){

    this.autor = {
      id : this.status.obtenerUsuarioLocalStorage().id
    }

    this._matchService.getEditores(this.autor).subscribe(data =>{
      console.log(data);
      this.editoresMatch = data;
    });
  }


  solicitarMatchToEditor(editor:Editor){

    this.editor = editor;
    console.log("solicitar match clicked");

    this.match = {
      id_editor : editor.id,
      id_autor: this.status.obtenerUsuarioLocalStorage().id,
      id_articulo_match : null,
      usuario_solicitante : this.status.obtenerUsuarioLocalStorage().id,
      usuario_solicitado : editor.id
    }

      this._matchService.solicitarMatch(this.match).subscribe(data=>{
        alert("Match solicitado correctamente");
       console.log(this.match);
       this.match = {}
        this.ngOnInit();
      });

  }


  descartarMatch(editor:Editor){
    this.editor = editor;

    console.log("descartar match clicked");

    this.match = {
      id_editor : editor.id,
      id_autor: this.status.obtenerUsuarioLocalStorage().id,
      id_articulo_match : null,

    }

      this._matchService.descartarMatch(this.match).subscribe(data=>{
        alert("Candidato match descartado");
       console.log(this.match);
       this.match = {}
        this.ngOnInit();
      });
  }

  validarUsuarioEnSesion(){
    if(this.status.obtenerUsuarioLocalStorage().rol == TIPO_USUARIO.EDITOR ){
      return TIPO_USUARIO.EDITOR;
    }else{
      return TIPO_USUARIO.EDITOR;
    }
  }


}
