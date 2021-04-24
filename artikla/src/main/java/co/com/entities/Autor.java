package co.com.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity (name="autor")
public class Autor extends Usuario {

	@OneToMany(fetch=FetchType.LAZY, mappedBy="autor")
        @JsonManagedReference
	private List<Articulo> articulos;

	public List<Articulo> getArticulos() {
		return articulos;
	}
	public void setArticulos(List<Articulo> articulos) {
		this.articulos = articulos;
	}
	
}
