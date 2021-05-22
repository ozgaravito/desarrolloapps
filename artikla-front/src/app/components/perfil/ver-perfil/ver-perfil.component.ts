import { Component, OnInit } from '@angular/core';
import { StatusPage } from 'src/app/helpers/status_page';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TIPO_USUARIO } from 'src/app/helpers/Constantes/Enums/usuarios';
import { Usuario } from 'src/app/entidades/user';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})


export class VerPerfilComponent implements OnInit {


  public status : StatusPage;
  public isEditor : boolean = false;
  public tituloRol : string;
  public usuarioDto:Usuario;
  public showComponent : boolean = false;
  public modulo:MODULOS;

  get MODULOS() { return MODULOS; };

  constructor(public router : Router, public authService : UsuarioService) { }

  ngOnInit(): void {
    this.status = new StatusPage(this.router);
    this.obtenerInformacionUsuario();

    this.modulo = MODULOS.ARTICULOS_LISTAR;
    
  }
  

  obtenerInformacionUsuario(){
    this.authService.obtenerUsuarioPorId(this.status.obtenerUsuarioLocalStorage().id).subscribe(
      (usuario : Usuario) => {
        if(usuario == null) {
          alert("Se ha presentado un inconveniente al obtener el usuario");
        } else {
          console.log("USUARIO")
          console.log(usuario);
          this.usuarioDto = usuario;
          
          if(usuario.rol === TIPO_USUARIO.EDITOR){
            this.isEditor = true;
          }
          console.log("es editor : "+ this.isEditor);
          this.showComponent = true;
        }
      }, error => {
        console.log(error);
      });
  }

  asignarModulo(modulo:MODULOS){
    this.modulo = modulo;
  }

  editarPerfil(usuario:Usuario){
    console.log(usuario);
    this.usuarioDto = usuario;
    this.asignarModulo(MODULOS.EDITAR_PERFIL);
  }

  cerrarModal(){
    this.ngOnInit();
  }

  

}
