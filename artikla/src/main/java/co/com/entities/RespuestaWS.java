package co.com.entities;

public class RespuestaWS {
	/*================= MENSAJES DE RESPUESTA DEL WS =========================*/
	public static RespWS errorGuardarUsuario = new RespWS(IRespWS.ERROR_GUARDAR_USUARIO, "Se ha presentado un inconveniente en el registro. Intenta nuevamente");
	public static RespWS usuarioRegistrado = new RespWS(IRespWS.USUARIO_REGISTRADO, "Usuario registrado exitosamente");
	public static RespWS errorEliminarArticulo = new RespWS(IRespWS.ERROR_ARTICULO_ELIMINAR, "Artículo eliminado exitosamente");
	public static RespWS articuloEliminado = new RespWS(IRespWS.ARTICULO_ELIMINADO, "Artículo eliminado exitosamente");
        public static RespWS matchSolicitado = new RespWS(IRespWS.MATCH_SOLICITADO, "La solicitud de match ha sido enviada");
        public static RespWS matchDescartado = new RespWS(IRespWS.MATCH_DESCARTADO, "El candidato a Match ha sido descartado");
}