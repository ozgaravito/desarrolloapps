import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusPage } from 'src/app/helpers/status_page';
import { FormBuilder } from '@angular/forms';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Router } from '@angular/router';
import { MatchDto } from 'src/app/entidades/MatchDto';
import { Match } from 'src/app/entidades/match';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';

@Component({
  selector: 'app-mis-matchs',
  templateUrl: './mis-matchs.component.html',
  styleUrls: ['./mis-matchs.component.css']
})
export class MisMatchsComponent implements OnInit {

  public mostrarMatchsSolicitados:number = 1;
  public status : StatusPage;
  public matchsSolicitados:MatchDto[];
  public matchsRecibidos:MatchDto[];
  public matchExitosos:MatchDto[];
  public mostrarMatchsExitosos:boolean = false;
  public rolUsuarioSesion:number;

  @Output() backHome = new EventEmitter();
  modulo:MODULOS;

  @Output() backMatch : number;

 
 get MODULOS() { return MODULOS; };

  public contactoMatch:MatchDto;

  constructor(public formBuilder:FormBuilder, public _matchService : MatchService,  private router:Router) { }


  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.rolUsuarioSesion = this.status.obtenerUsuarioLocalStorage().rol;
    this.obtenerMatchsSolicitados();
   
  }

  redirigirMatchRecibidos(){
    this.mostrarMatchsSolicitados = 2;
    this.obtenerMatchsRecibidos();
  }

  redirigirMatchSolicitados(){
    this.mostrarMatchsSolicitados = 1;
    this.obtenerMatchsSolicitados();
  }


  redirigirMatchExitosos(){
    this.mostrarMatchsSolicitados = 3;
    this.obtenerMatchsExitosos();
  }

  redirigirMatchComunicado(match:MatchDto){
    this.mostrarMatchsSolicitados = 4;
    this.contactoMatch = match;
  }

  obtenerMatchsSolicitados(){
    this._matchService.obtenerMatchsSolicitados(this.status.obtenerUsuarioLocalStorage()).subscribe(data=>{
      console.log("obteniendo match")
      this.matchsSolicitados = data;
    });
  }

  obtenerMatchsRecibidos(){
    this._matchService.obtenerMatchsRecibidos(this.status.obtenerUsuarioLocalStorage()).subscribe(data=>{
      console.log("recibiendo matchs")
      this.matchsRecibidos = data;
    });
  }


  aceptarMatch(match:MatchDto){

    console.log("match aqui")
    console.log(match);

     this._matchService.aceptarMatch(match).subscribe(data=>{
       console.log("match aceptado");
       alert("Match aceptado con éxito");
       if(this.mostrarMatchsSolicitados == 1){
        this.redirigirMatchSolicitados();
       }else if(this.mostrarMatchsSolicitados == 2){
         this.redirigirMatchRecibidos();
       }else if(this.mostrarMatchsSolicitados == 3){
         this.redirigirMatchExitosos();
       }
     });
  }

  rechazarMatch(match:MatchDto){
    this._matchService.rechazarMatch(match).subscribe(data=>{
      console.log("match rechazado");
      alert("Se ha rechaado el amtch");
      if(this.mostrarMatchsSolicitados == 1){
       this.redirigirMatchSolicitados();
      }else if(this.mostrarMatchsSolicitados == 2){
        this.redirigirMatchRecibidos();
      }else if(this.mostrarMatchsSolicitados == 3){
        this.redirigirMatchExitosos();
      }
    });
  }


  obtenerMatchsExitosos(){
    this._matchService.obtenerMatchExitosos(this.status.obtenerUsuarioLocalStorage()).subscribe(data=>{
      console.log("recibiendo matchs");
      this.matchExitosos = data;
    });
  }


  asignarModulo(modulo:MODULOS){  
    this.modulo = modulo;
  }

  cerrarModal(mostrarMatchsSolicitados:number){
    this.mostrarMatchsSolicitados = mostrarMatchsSolicitados;
  }
}
