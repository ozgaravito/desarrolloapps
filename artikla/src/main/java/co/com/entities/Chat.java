package co.com.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity
public class Chat {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "match_id", referencedColumnName = "id")
	private MatchT match_id;
	@OneToMany (fetch=FetchType.LAZY, mappedBy="chat")
	private Set<Mensaje> mensajes= new HashSet<Mensaje>(0);
	@Column(name = "fecha_inicio")
	private Date fechaInicio;
	@Column(name = "fecha_fin")
	private Date fechaFin;
	
	private int estadoChat;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public Date getFechaFin() {
		return fechaFin;
	}
	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}
	public int getEstadoChat() {
		return estadoChat;
	}
	public void setEstadoChat(int estadoChat) {
		this.estadoChat = estadoChat;
	}
	public MatchT getMatch_id() {
		return match_id;
	}
	public void setMatch_id(MatchT match_id) {
		this.match_id = match_id;
	}
	public Set<Mensaje> getMensajes() {
		return mensajes;
	}
	public void setMensajes(Set<Mensaje> mensajes) {
		this.mensajes = mensajes;
	}
	
	
}
