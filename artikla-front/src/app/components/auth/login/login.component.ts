import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { VALIDACIONES_USUARIO } from 'src/app/helpers/validacion_campos/user.validators';
import { GrupoValidaciones, MensajeCampo } from 'src/app/interfaces/interface.validators';
import { Login, Usuario } from 'src/app/entidades/user';
import { Router } from '@angular/router';
import { StatusPage } from 'src/app/helpers/status_page';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public status : StatusPage;
  /*==== Formulario con validaciones ====*/
  public loginForm : FormGroup;
  public VAL : VALIDACIONES_USUARIO = new VALIDACIONES_USUARIO();

  constructor(public formBuilder : FormBuilder, public authService : UsuarioService, public router : Router) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.status.eliminarUsuarioLocalStorage();
    //*===================== FORMULARIO ===================*/
    this.loginForm = this.formBuilder.group({
      correoUsuario: ['', [...this.VAL.correoUsuarioVal.validators]],
      passwordUsuario: ['', [...this.VAL.passwordLoginVal.validators]],
    });


    /*=================== VALIDAR MENSAJES ASOCIADOS A CADA VALIDACIÓN ===================*/
    this.validarCampoMsg(this.loginForm.get("correoUsuario"), this.VAL.correoUsuarioVal);
    this.validarCampoMsg(this.loginForm.get("passwordUsuario"), this.VAL.passwordLoginVal);

  }

  validarCampoMsg(control : AbstractControl, val : GrupoValidaciones) {
    control.valueChanges.pipe().subscribe(
      value => {
        val.showMsg = MensajeCampo(control, val.validatorsMsg) || "";
      });
  }


//SE DEBE CREAR UNA NUEVA CLASE PARA CONTROLAR EL ESTADO DE LOS COMPONENTES:
onRedirect(redirect : string, ...param) {
  // this.loading = true; //Pantalla de carga
  setTimeout(() => {
      // this.loading = false;
      if(redirect.includes("http")) window.location.href = redirect;
      else if(param.length > 0) {
          this.router.navigate([redirect, {p: param}]);
      } else this.router.navigateByUrl(redirect);
  }, 2000);
}

  login() {
    if(this.loginForm.valid) {
      // this.status.loading = true;
      this.authService.login(this.loginForm.getRawValue()).subscribe(
        (idRespuesta : number) => {
          if(idRespuesta == null) {
            alert("Correo y/o contraseña incorrectos");
            this.loginForm.get("passwordUsuario").setValue("");
          } else {
            let usuario : Usuario = {
              id : idRespuesta
            }
            this.status.guardarUsuarioLocalStorage(usuario);
            this.router.navigate(["/home"]);
          }
        }, error => {
          console.log(error);
        });
    } else {
      for(let value in this.loginForm.value) {
        if(this.loginForm.get(value).invalid) {
          this.loginForm.get(value).markAsTouched();
          this.VAL[value+"Val"].showMsg = MensajeCampo(this.loginForm.get(value), this.VAL[value+"Val"].validatorsMsg);
        }
      }
    }
  }

}
