import { _respWS } from '../helpers/Constantes/Enums/cod_respuestasWS';

export interface RespuestaWS {
    codigo : _respWS,
    mensaje? : string,
    success? : boolean,
    mostrar? : boolean
}