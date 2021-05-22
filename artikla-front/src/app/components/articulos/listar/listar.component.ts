import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../services/articulos/articulo.service'
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { StatusPage } from 'src/app/helpers/status_page';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Output() backHome = new EventEmitter();
  articulos:ArticuloDto[];
  articuloDto:ArticuloDto;
  categorias:Categoria[];
  public status : StatusPage;

  public modulo : MODULOS;
  get MODULOS() { return MODULOS; };
 
  
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.status = new StatusPage(this.router);
    this.cargarArticulos();
    this.modulo = MODULOS.ARTICULOS_LISTAR;
  }
  
  cargarArticulos() {
    this.service.getArticulosAutor(this.status.obtenerUsuarioLocalStorage().id).subscribe(data=>{
      this.articulos = data;
    }, error => {
      console.log(error);
    });
  }
  
  editarArticulo(articuloDto:ArticuloDto, categorias:Categoria[]):void{
    console.log(categorias);
    this.articuloDto = articuloDto;
    this.categorias = categorias;
    this.modulo = MODULOS.ARTICULOS_EDITAR;
  }


  asignarModulo(modulo:MODULOS){
    this.modulo = modulo;
  }

  eliminarArticulo(articuloEliminar : ArticuloDto) {
    this.status.modalInfo.listaMensajes = ["¿Estás seguro de eliminar tu artículo?", articuloEliminar.titulo.toString()]
    this.status.modalInfo.confirmacion = true;
    this.articuloDto = articuloEliminar;
    this.status.mostrarModal();
    this.confirmarEliminarArticulo(this.status.modalInfo.confirmacion);

  }

  confirmarEliminarArticulo(eliminar) {
    this.status.cerrarModal();
    this.articuloDto != undefined? this.articuloDto.id : -1;

    if(eliminar){
      this.service.eliminarArticulo(this.articuloDto).subscribe(
        (res : RespuestaWS) => {
          console.log(res);
          this.validarRespuestaWS(res);
          this.cargarArticulos();

        }, error => {
          console.log(error);
        });
    }
  }

  cerrarModal(modulo:MODULOS){
    this.modulo = modulo;
    this.cargarArticulos();
  }

  validarRespuestaWS(respuesta : RespuestaWS) {
    if(this.status.mensajePorMostrar(respuesta))
      alert(respuesta.mensaje);
  }
  
}

