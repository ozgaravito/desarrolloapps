import { Categoria } from './Categoria';
import { Autor } from './autor';

export interface ArticuloDto {
    id:number;
    titulo: string;
    descripcion: string;
    categorias:Categoria[];
    autor:Autor;
}

export interface ArticuloMatch {
    id: number;
    titulo: string;
    descripcion: string;
    categorias: Categoria[];
    autor : Autor
}