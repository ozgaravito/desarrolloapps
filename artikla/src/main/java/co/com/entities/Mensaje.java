package co.com.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Mensaje {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(name = "id_usuario_envia")
	private long idUsuarioEnvia;
	@Column(name = "id_usuario_recibe")
	private long idUsuarioRecibe;
	@Column(name = "nombre_revista")
	private String mensaje;
	private Date fecha;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_chat", nullable = false)
	@JsonBackReference
	private Chat chat;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getIdUsuarioEnvia() {
		return idUsuarioEnvia;
	}
	public void setIdUsuarioEnvia(long idUsuarioEnvia) {
		this.idUsuarioEnvia = idUsuarioEnvia;
	}

	public long getIdUsuarioRecibe() {
		return idUsuarioRecibe;
	}
	public void setIdUsuarioRecibe(long idUsuarioRecibe) {
		this.idUsuarioRecibe = idUsuarioRecibe;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	
	
}
