import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { MatchDto } from 'src/app/entidades/MatchDto';
import { StatusPage } from 'src/app/helpers/status_page';
import { FormBuilder } from '@angular/forms';
import { MatchService } from 'src/app/services/match/match.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-match',
  templateUrl: './contacto-match.component.html',
  styleUrls: ['./contacto-match.component.css']
})
export class ContactoMatchComponent implements OnInit {

  @Output() backMatch = new EventEmitter();
  @Input() contactoMatch:MatchDto;
  public status : StatusPage;
  mostrarMatchsSolicitados:number;
 

  modulo:MODULOS;

 
 get MODULOS() { return MODULOS; };


 constructor(public formBuilder:FormBuilder, public _matchService : MatchService,  private router:Router) { }

  ngOnInit(): void {
    console.log(this.contactoMatch);
    this.status = new StatusPage(this.router);
  }


  cerrarModal(mostrarMatchsSolicitados:number){
    this.mostrarMatchsSolicitados= mostrarMatchsSolicitados;
     this.backMatch.emit(3);
  }

}
