package co.com.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Categoria {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String titulo;
	private String descripcion;
	private int estado;
        
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            })
    @JoinTable(name = "intereses",
            joinColumns = { @JoinColumn(name = "categoria_id") },
            inverseJoinColumns = { @JoinColumn(name = "usuario_id") })
	private Set<Usuario> usuarios = new HashSet<Usuario>(0);

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getEstado() {
		return estado;
	}
	public void setEstado(int estado) {
		this.estado = estado;
	}

	
}
