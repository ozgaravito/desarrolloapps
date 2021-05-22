import { _respWS } from './Enums/cod_respuestasWS';
import { RespuestaWS } from 'src/app/interfaces/respueta.ws';

export class RespuestasWS {
    public ERROR_GUARDAR_SOL : RespuestaWS = { codigo: _respWS.ERROR_GUARDAR_USUARIO, mostrar: true };
    public USUARIO_REGISTRADO : RespuestaWS = { codigo: _respWS.USUARIO_REGISTRADO, mostrar: true };
    public ERROR_ARTICULO_ELIMINAR : RespuestaWS = { codigo: _respWS.ERROR_ARTICULO_ELIMINAR, mostrar: true };
    public ARTICULO_ELIMINADO : RespuestaWS = { codigo: _respWS.ARTICULO_ELIMINADO, mostrar: true };
}