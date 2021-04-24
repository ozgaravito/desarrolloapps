/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.negocio;

import co.com.entities.Articulo;
import co.com.entities.Autor;
import co.com.entities.Categoria;
import co.com.entities.Editor;
import co.com.entities.MatchT;
import co.com.entities.Usuario;
import java.util.List;

/**
 *
 * @author Usuario
 */
public class MatchDto {

    private MatchT match;
    private Usuario usuarioSolicitado;
    private Usuario usuarioSolicitante;
    private Usuario autor;
    private Usuario editor;
    private Articulo articulo;


    public MatchT getMatch() {
        return match;
    }

    public void setMatch(final MatchT match) {
        this.match = match;
    }

    public Usuario getUsuarioSolicitado() {
        return usuarioSolicitado;
    }

    public void setUsuarioSolicitado(final Usuario usuarioSolicitado) {
        this.usuarioSolicitado = usuarioSolicitado;
    }

    public Articulo getArticulo() {
        return articulo;
    }

    public void setArticulo(final Articulo articulo) {
        this.articulo = articulo;
    }

    public Usuario getUsuarioSolicitante() {
        return usuarioSolicitante;
    }

    public void setUsuarioSolicitante(final Usuario usuarioSolicitante) {
        this.usuarioSolicitante = usuarioSolicitante;
    }

    public Usuario getAutor() {
        return autor;
    }

    public void setAutor(final Usuario autor) {
        this.autor = autor;
    }

    public Usuario getEditor() {
        return editor;
    }

    public void setEditor(final Usuario editor) {
        this.editor = editor;
    }
    
    
       
}
