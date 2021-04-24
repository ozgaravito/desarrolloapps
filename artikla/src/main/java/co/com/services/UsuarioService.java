package co.com.services;

import co.com.controllers.UsuarioController;
import co.com.entities.Articulo;
import java.util.Optional;

import org.apache.catalina.connector.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.com.negocio.Login;
import co.com.entities.Autor;
import co.com.entities.IRespWS;
import co.com.entities.Usuario;
import co.com.repositories.UsuarioRepository;

@RestController
public class UsuarioService {

	@Autowired(required= true)
	UsuarioRepository usuarioRepository;
        
        @Autowired(required = true)
        UsuarioController usuarioController;
	
	@RequestMapping(value="/iniciarSesion", method= RequestMethod.POST)  
	public Long obtenerUsuarioPorCorreoClave(@RequestBody Login login){
		Usuario user = usuarioRepository.findByCorreoAndClave(login.getCorreoUsuario(), login.getPasswordUsuario());
		if(user != null) return user.getId();
		return null;
	}
	
	@RequestMapping(value="/obtenerUsuarioPorId", method= RequestMethod.POST)  
	public Usuario obtenerUsuarioPorId(@RequestBody long id){
		Usuario user = usuarioRepository.findById(id);
		return user;
	} 
        
        
        @RequestMapping(value="/actualizarUsuario")
        public Usuario actualizarUsuarioById(@RequestBody Usuario usuario){
            
            Usuario usuarioActualizado = usuarioController.actualizarUsuario(usuario);
            
            return usuarioActualizado;
            
        }
        

	
	
}
