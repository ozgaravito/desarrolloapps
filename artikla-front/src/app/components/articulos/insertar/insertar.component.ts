import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/articulos/articulo.service';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { Categoria } from 'src/app/entidades/Categoria';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { StatusPage } from 'src/app/helpers/status_page';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  
  @Output() backHome = new EventEmitter();
   modulo:MODULOS;
   public status : StatusPage;

  
  get MODULOS() { return MODULOS; };

  public ArticuloDto : FormGroup;
  public categoriasCrear:Categoria[];
  public mostrarCategorias:boolean = false;


  constructor(public formBuilder : FormBuilder, private router:Router, private service:ServiceService) { }

  ngOnInit(): void {

    this.status = new StatusPage(this.router);
    this.ArticuloDto = this.formBuilder.group({
      titulo: ['',[]],
      descripcion: ['', []],
      autor: [this.status.obtenerUsuarioLocalStorage(), []],
      categorias: this.formBuilder.array([]),
     
    });

    this.service.getCategorias().subscribe(data =>{
      this.categoriasCrear = data;
      console.log(this.categoriasCrear)
    });
    
  }


  actualizarChkbxArray(chk, isChecked, key) {

    const chkArray = <FormArray>this.ArticuloDto.get(key);

    if (isChecked) {
      console.log("esta checkeado :" + chk.titulo);
   
         if (chkArray.controls.findIndex(x => x.value == chk.id) == -1)
             chkArray.push(new FormControl({ id: chk.id, titulo: chk.titulo }));
            console.log("agregando :" +chkArray);
             console.log(chkArray);
    } else {
      console.log("no esta checkeado :" + chk.titulo)
         let idx = chkArray.controls.findIndex(x => x.get("chk.titulo") == chk.titulo);
         chkArray.removeAt(idx);
         console.log("eliminando" );
         console.log(chkArray)
    }
    
}
  
  cerrarModal(){
   this.backHome.emit(MODULOS.ARTICULOS_LISTAR);
  }

  guardarArticulo(){
    console.log(this.ArticuloDto);
   
    this.service.crearArticulo(this.ArticuloDto.getRawValue()).subscribe((data:string)=>{
      alert("Articulo agregado con éxito");
     this.cerrarModal();
    }, e   =>{
      console.log("error" + e);
    });
  }
}
