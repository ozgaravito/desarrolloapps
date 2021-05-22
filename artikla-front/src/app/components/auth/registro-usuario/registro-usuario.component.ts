import { Component, OnInit } from '@angular/core';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { VALIDACIONES_USUARIO } from 'src/app/helpers/validacion_campos/user.validators';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoValidaciones, MensajeCampo } from 'src/app/interfaces/interface.validators';
import { StatusPage } from 'src/app/helpers/status_page';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario/registro-usuario.service';
import { of } from 'rxjs';
import { RespuestasWS } from 'src/app/helpers/Constantes/respuestasWS';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  public status : StatusPage;
  
  get TIPO_USUARIO() { return TIPO_USUARIO };
  public decisionRegistro : TIPO_USUARIO = null;
  
  /*==== Formulario con validaciones ====*/
  public formRegistrar : FormGroup;
  public VAL : VALIDACIONES_USUARIO = new VALIDACIONES_USUARIO();

  public WS : RespuestasWS = new RespuestasWS();
  constructor(public formBuilder : FormBuilder, public router : Router, public _regService : RegistroUsuarioService) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);

    this.infoformUsuario();
  }

  validarCampoMsg(control : AbstractControl, val : GrupoValidaciones) {
    control.valueChanges.pipe().subscribe(
      value => {
        val.showMsg = MensajeCampo(control, val.validatorsMsg) || "";
      });
  }

  infoformUsuario() {
    //*===================== FORMULARIO ===================*/
    this.formRegistrar = this.formBuilder.group({
      nombre: ['', [...this.VAL.nombreUsuarioVal.validators]],
      correo: ['', [...this.VAL.correoUsuarioVal.validators]],
      descripcion: ['', [...this.VAL.descripcionUsuarioVal.validators]],
      rol: ['', [...this.VAL.rolVal.validators]],
      clave: ['', [...this.VAL.passwordUsuarioVal.validators]],
      passwordConfirm: ['', [...this.VAL.passwordConfirmVal.validators]],
    });

    /*=================== VALIDAR MENSAJES ASOCIADOS A CADA VALIDACIÓN ===================*/
    this.validarCampoMsg(this.formRegistrar.get("nombre"), this.VAL.nombreUsuarioVal);
    this.validarCampoMsg(this.formRegistrar.get("correo"), this.VAL.correoUsuarioVal);
    this.validarCampoMsg(this.formRegistrar.get("descripcion"), this.VAL.descripcionUsuarioVal);
    this.validarCampoMsg(this.formRegistrar.get("rol"), this.VAL.rolVal);
    this.validarCampoMsg(this.formRegistrar.get("clave"), this.VAL.passwordUsuarioVal);
    this.validarCampoMsg(this.formRegistrar.get("passwordConfirm"), this.VAL.passwordConfirmVal);
  }

  infoFormAutor() {
    this.formRegistrar.get("rol").setValue(TIPO_USUARIO.AUTOR);
    this.formRegistrar.addControl("autor", new FormControl());
  }

  infoFormEditor() {
    this.formRegistrar.get("rol").setValue(TIPO_USUARIO.EDITOR);
    this.formRegistrar.addControl("nombreRevista", new FormControl('', this.VAL.nombreRevistaVal));    
    this.formRegistrar.addControl("descripcionRevista", new FormControl('', this.VAL.descripcionRevistaVal));

    this.validarCampoMsg(this.formRegistrar.get("nombreRevista"), this.VAL.nombreRevistaVal);
    this.validarCampoMsg(this.formRegistrar.get("descripcionRevista"), this.VAL.descripcionRevistaVal);
  }

  DesicionUsuarioRegistro(tipoUsuario : TIPO_USUARIO) {
    console.log(tipoUsuario);
    switch(tipoUsuario) {
      case TIPO_USUARIO.AUTOR:
        this.infoFormAutor();
        this.decisionRegistro = TIPO_USUARIO.AUTOR;  break;
      case TIPO_USUARIO.EDITOR:
        this.infoFormEditor();
        this.decisionRegistro = TIPO_USUARIO.EDITOR; break;
      default:
        alert("Selecciona una opción"); break;
    }
  }

  registrar() {
    if(this.decisionRegistro == TIPO_USUARIO.AUTOR)
      this.registrarAutor();
    else if(this.decisionRegistro == TIPO_USUARIO.EDITOR)
      this.registrarEditor();
  }
  

  registrarAutor() {
    if(this.formRegistrar.valid) {
      this._regService.registrarAutor(this.formRegistrar.getRawValue()).subscribe(
        (res : RespuestaWS) => {
          console.log(res);
          this.validarRespuestaWS(res);

        }, error => {
          console.log(error);
        });

    } else {
      alert("Ingresa todos los campos");
      // this.status.requestMsj = ["Ingresa todos los campos"];
      // for(let value in this.formRegistrar.value) {
      //   if(this.formRegistrar.get(value).invalid) {
      //     let grupo : GrupoValForm = this.GrupoVal.find(c => c.control == this.formRegistrar.get(value));
      //     if(grupo != undefined)
      //       this.status.requestMsj = [MensajeCampo(grupo.control, grupo.grupoVal.validatorsMsg)];
      //     break;
      //   }
      // }
      // this.status.showModal();
    }    
  }

  registrarEditor() {
    if(this.formRegistrar.valid) {
      this._regService.registrarEditor(this.formRegistrar.getRawValue()).subscribe(
        (res : RespuestaWS) => {
          console.log(res);
          this.validarRespuestaWS(res);

        }, error => {
          console.log(error);
        });

    } else {
      alert("Ingresa todos los campos");
      // this.status.requestMsj = ["Ingresa todos los campos"];
      // for(let value in this.formRegistrar.value) {
      //   if(this.formRegistrar.get(value).invalid) {
      //     let grupo : GrupoValForm = this.GrupoVal.find(c => c.control == this.formRegistrar.get(value));
      //     if(grupo != undefined)
      //       this.status.requestMsj = [MensajeCampo(grupo.control, grupo.grupoVal.validatorsMsg)];
      //     break;
      //   }
      // }
      // this.status.showModal();
    }    
  }

  validarRespuestaWS(respuesta : RespuestaWS) {
    if(this.status.mensajePorMostrar(respuesta))
      alert(respuesta.mensaje);
  }

}
