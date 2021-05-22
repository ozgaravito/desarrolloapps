import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticuloDto } from 'src/app/entidades/ArticuloDto';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/articulos/articulo.service';
import { MODULOS } from 'src/app/helpers/Constantes/Enums/modulos';
import { Categoria } from 'src/app/entidades/Categoria';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() articuloEditar : ArticuloDto;
  @Input() categoriasEditar:Categoria[];

  @Output() backHome = new EventEmitter();
   modulo:MODULOS;

  
  get MODULOS() { return MODULOS; };

  articuloDto:ArticuloDto;
  categorias:Categoria[];


  ArticuloDto : FormGroup;
  categoriasActualizar: Categoria[];
 
  
  constructor(public formBuilder: FormBuilder, private router:Router, public service:ServiceService) { }

  ngOnInit(): void {
    console.log(this.modulo);
    console.log("modulo :" +this.modulo)
    
    this.ArticuloDto = this.formBuilder.group({
      titulo: [this.articuloEditar.titulo,[]],
      descripcion: [this.articuloEditar.descripcion, []],
      categorias: this.formBuilder.array([]),
    });

    this.service.getCategorias().subscribe(categorias =>{
      console.log(categorias);
      this.categorias = categorias;
    });

  }
  


filtrarCategoriasSeleccionadas(categoria:Categoria, key){
  
  if(this.categoriasEditar.find(a => a.id == categoria.id) == undefined){
    return false;
  }else{
    
    return true;
  }

}

  cerrarModalEditar(modulo:MODULOS){
    this.modulo= modulo;
   this.backHome.emit(MODULOS.ARTICULOS_LISTAR);
  }

  actualizarArticulo(articuloEditar:ArticuloDto):void{

    this.service.editarArticulo(articuloEditar).subscribe(data=>{
      this.articuloDto = data;
    });
    this.cerrarModalEditar(MODULOS.ARTICULOS_LISTAR);
    alert("Se actualizo el articulo correctamente");

  }


  actualizarChkbxArray(chk, isChecked, key) {

    const chkArray = <FormArray>this.ArticuloDto.get(key);
    //chkArray.push(chkArray);


    if (isChecked) {
      console.log("esta checkeado :" + chk.titulo);
   
         if (chkArray.controls.findIndex(x => x.value == chk.id) == -1)
             chkArray.push(new FormControl({ id: chk.id, titulo: chk.titulo }));
            console.log("agregando :" +chkArray);
             console.log(chkArray);
    } else {
      console.log("no esta checkeado :" + chk.titulo)
         let idx = chkArray.controls.findIndex(x => x.value == chk.titulo);
         chkArray.removeAt(idx);
         console.log("eliminando" );
         console.log(chkArray)
    }
    
}

}
