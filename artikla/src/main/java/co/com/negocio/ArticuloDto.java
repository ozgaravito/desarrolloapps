/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.negocio;

import co.com.entities.Categoria;
import java.util.List;

/**
 *
 * @author Usuario
 */
public class ArticuloDto {
    private Long id;
    private String titulo;
    private String descripcion;
    private List<Categoria> categorias;

    
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

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(final List<Categoria> categorias) {
        this.categorias = categorias;
    }
    

    

    
    
    
    
}
