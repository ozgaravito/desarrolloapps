import { Usuario } from './user';
import { Match } from './match';
import { ArticuloDto } from './ArticuloDto';
import { Autor } from './autor';
import { Editor } from './editor';

export interface MatchDto {
    id? : number,
	match?:Match,
	usuarioSolicitado?:Usuario,
	usuarioSolicitante?:Usuario,
	articulo?:ArticuloDto,
	autor?:Autor,
	editor?:Editor,
}