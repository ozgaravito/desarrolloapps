package co.com.entities;

public class RespWS {
	private IRespWS codigo;
	private String mensaje;
	private boolean success = false;
	
	public RespWS(IRespWS cod, String msg) {
		setCodigo(cod);
		setMensaje(msg);
	}
	
	public IRespWS getCodigo() {
		return codigo;
	}

	public void setCodigo(IRespWS codigo) {
		this.codigo = codigo;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public boolean getSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
}

