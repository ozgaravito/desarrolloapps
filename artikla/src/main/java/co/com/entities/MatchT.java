package co.com.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class MatchT {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private Long id_autor;
	private Long idEditor;
	private Integer estado;
	private Date fechaSolicitud;
	private Date fechaAceptacion;
        private Date fechaRechazo;
	private Long idArticulo;
	private Long usuario_solicitado;
	private Long usuario_solicitante;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "chat_id", referencedColumnName = "id")
	private Chat chat_id;
	
	public Chat getChat_id() {
		return chat_id;
	}
	public void setChat_id(Chat chat_id) {
		this.chat_id = chat_id;
	}
	public Date getFechaSolicitud() {
		return fechaSolicitud;
	}
	public void setFechaSolicitud(Date fechaSolicitud) {
		this.fechaSolicitud = fechaSolicitud;
	}
	public Date getFechaAceptacion() {
		return fechaAceptacion;
	}
	public void setFechaAceptacion(Date fechaAceptacion) {
		this.fechaAceptacion = fechaAceptacion;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getId_autor() {
		return id_autor;
	}
	public void setId_autor(Long id_autor) {
		this.id_autor = id_autor;
	}
	public Long getId_editor() {
		return idEditor;
	}
	public void setId_editor(Long id_editor) {
		this.idEditor = id_editor;
	}
	public Integer getEstado() {
		return estado;
	}
	public void setEstado(Integer estado) {
		this.estado = estado;
	}
	public Long getId_articulo_match() {
		return idArticulo;
	}
	public void setId_articulo_match(Long id_articulo_match) {
		this.idArticulo = id_articulo_match;
	}
        
        public Long getUsuario_solicitado() {
		return usuario_solicitado;
	}
	public void setUsuario_solicitado(Long usuario_solicitado) {
		this.usuario_solicitado = usuario_solicitado;
	}
	public Long getUsuario_solicitante() {
		return usuario_solicitante;
	}
	public void setUsuario_solicitante(Long usuario_solicitante) {
		this.usuario_solicitante = usuario_solicitante;
	}

    public Date getFechaRechazo() {
        return fechaRechazo;
    }

    public void setFechaRechazo(Date fechaRechazo) {
        this.fechaRechazo = fechaRechazo;
    }
        
	
}
