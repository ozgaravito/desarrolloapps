import { TIPO_USUARIO } from '../helpers/Constantes/Enums/usuarios';

export interface Usuario {
    id : number,
    nombre? : string,
    descripcion? : string,
    correo? : string,
    rol? : TIPO_USUARIO,
    estado? : boolean,
    clave? : string
    // intereses : Intereses
}

export interface Login {
    correoUsuario : String;
    passwordUsuario : String;
    success : boolean;
}