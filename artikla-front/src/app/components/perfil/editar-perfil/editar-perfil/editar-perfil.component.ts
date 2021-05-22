import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/user';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  
  @Input() usuarioEditar : Usuario;
  @Output() backHome = new EventEmitter();
  

  usuarioDto:Usuario;
  formEditarPerfil : FormGroup;
  modulo:MODULOS;

 
 get MODULOS() { return MODULOS; };

  constructor(public formBuilder: FormBuilder, private router:Router, public service:UsuarioService) { }

  ngOnInit(): void {
    console.log(this.usuarioEditar);
    this.formEditarPerfil = this.formBuilder.group({
      nombre : [this.usuarioEditar.nombre, []],
      descripcion : [this.usuarioEditar.descripcion, []],
      correo : [this.usuarioEditar.correo, []],
    });
  }


  editarPerfil(usuario:Usuario){
    this.service.editarUsuario(usuario).subscribe(data =>{
      this.usuarioDto = data;
      this.cerrarModal(MODULOS.ARTICULOS_LISTAR);
    });
  }

  cerrarModal(modulo:MODULOS){
    this.modulo= modulo;
    this.backHome.emit(MODULOS.ARTICULOS_LISTAR);
  }

}
