import { ArticuloDto } from './ArticuloDto';

export interface Autor{
    id?:number;
    nombre?:string;
    correo?:string;
    clave?:string;
    descripcion?:string;
    estado?:string;
    rol?:string;
    intereses?:string;
    articulos?:Array<ArticuloDto>;
    titulo?:string;
    fechaPublicacion?:Date;
    categorias?:string;
}