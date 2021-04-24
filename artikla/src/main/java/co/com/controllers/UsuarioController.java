package co.com.controllers;


import co.com.entities.Articulo;
import co.com.entities.Autor;
import co.com.entities.Editor;
import co.com.entities.Rol;
import co.com.entities.Usuario;
import co.com.negocio.RolEnum;
import co.com.repositories.UsuarioRepository;
import java.util.Date;
import java.util.List;
import org.hibernate.Hibernate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UsuarioController{

	@Autowired(required=true)
	 UsuarioRepository usuarioRepository;
        

    public Usuario actualizarUsuario(final Usuario usuario) {
    	
        
        Usuario nuevoUsuario = usuarioRepository.findById(usuario.getId());
        
        if(nuevoUsuario instanceof Autor){
             nuevoUsuario.setCorreo(usuario.getCorreo());
             nuevoUsuario.setNombre(usuario.getNombre());
             nuevoUsuario.setDescripcion(usuario.getDescripcion());
        }else if(nuevoUsuario instanceof Editor){
            nuevoUsuario.setDescripcion(usuario.getDescripcion());
            nuevoUsuario.setNombre(usuario.getNombre());
            nuevoUsuario.setCorreo(usuario.getCorreo());
            ((Editor) nuevoUsuario).setDescripcionRevista(usuario.getDescripcion());
            ((Editor) nuevoUsuario).setNombreRevista(usuario.getNombre());
        }
        
       
        
    	return usuarioRepository.save(nuevoUsuario);
    }
    

   
}
