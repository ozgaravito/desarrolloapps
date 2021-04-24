package co.com.controllers;

import antlr.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import co.com.entities.Articulo;
import co.com.entities.Autor;
import co.com.entities.MatchT;
import co.com.entities.Usuario;
import co.com.negocio.EstadoMatchEnum;
import co.com.negocio.MatchDto;
import co.com.negocio.RolEnum;
import co.com.repositories.ArticuloRepository;
import co.com.repositories.AutorRepository;
import co.com.repositories.EditorRepository;
import co.com.repositories.MatchTRepository;
import co.com.repositories.UsuarioRepository;
import java.util.Optional;
import javax.mail.MessagingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Component
public class MatchTController {

	final Logger logger = LoggerFactory.getLogger(MatchTController.class);

	@Autowired
	MatchTRepository matchtRepository;

	@Autowired
	ArticuloRepository articuloRepository;

	@Autowired
	AutorRepository autorRepository;

	@Autowired
	CorreoController correoController;
        
        @Autowired
        UsuarioRepository usuarioRepository;
	
	
	public MatchT solicitarMatch(MatchT matchInsert) {
            
		MatchT matchT = new MatchT();
		matchT.setFechaSolicitud(new Date());
		matchT.setEstado(EstadoMatchEnum.PENDIENTE.getId());
		matchT.setId_articulo_match(matchInsert.getId_articulo_match());
		matchT.setId_autor(matchInsert.getId_autor());
		matchT.setId_editor(matchInsert.getId_editor());
                matchT.setUsuario_solicitante(matchInsert.getUsuario_solicitante());
                matchT.setUsuario_solicitado(matchInsert.getUsuario_solicitado());
		
		return matchtRepository.save(matchT);
	}
        
        public MatchT descartarMatch(MatchT matchInsert) {
            
		MatchT matchT = new MatchT();
		matchT.setFechaSolicitud(new Date());
		matchT.setEstado(EstadoMatchEnum.DESCARTADO.getId());
		matchT.setId_articulo_match(matchInsert.getId_articulo_match());
		matchT.setId_autor(matchInsert.getId_autor());
		matchT.setId_editor(matchInsert.getId_editor());
		
		return matchtRepository.save(matchT);
	}
	
	  public List<Articulo> buscarArticulosInicio() {
	    	
	    	List<Articulo> articulosObj = new ArrayList<>();
                
	    	articulosObj = articuloRepository.findAll();
                
		    for (Articulo articuloObj : articulosObj) {
                            Optional<Usuario> usuario = null;
                            Autor autor = new Autor();
                            logger.debug(usuario.toString());
                                autor.setNombre(usuario.get().getNombre());
                                autor.setId(usuario.get().getId());
                                autor.setDescripcion(usuario.get().getDescripcion());
                           
                            articuloObj.setAutor(autor);
                }
	    	return articulosObj ;
	    }
	  
	  public List<Autor> obtenerPosiblesMatchAutores(Long idEditor) {
		  List<Autor> autoresMatch = new ArrayList<Autor>();
		  
		  for(Autor autor : autorRepository.findAll()) {
			  List<Articulo> articulos = autor.getArticulos();
			  autor.setArticulos(new ArrayList<Articulo>());
			  if(!articulos.isEmpty()) {
				  for(Articulo articulo : articulos) {
					  if(matchtRepository.findByIdArticuloAndIdEditor(articulo.getId(), idEditor) == null)  {
						  autor.getArticulos().add(articulo);
					  }
				  }
				  autoresMatch.add(autor);
			  }
		  }
		  
		  return autoresMatch;
	  }
          
          
          public List<MatchDto> obtenerMatchSolicitados(final Usuario usuarioSolicitante){     
              
               List<MatchDto> matchSolicitadoCompleto = new ArrayList<>();
              
               for (MatchT match :  matchtRepository.obtenerMatchSolicitados(usuarioSolicitante.getId())) {
                   
                  Usuario usuarioSolicitado = usuarioRepository.findById(match.getUsuario_solicitado()).get();
                  
                  if(usuarioSolicitado != null){
                      MatchDto matchSolicitado = new MatchDto();
                    
                        if(usuarioSolicitado.getRol() == RolEnum.AUTOR.getId() && match.getId_articulo_match() != null){
                            Articulo articulo = articuloRepository.findById(match.getId_articulo_match()).get();
                            
                            String descripcionArticulo = articulo.getDescripcion().length() > 14 ? articulo.getDescripcion().substring(0, 13) + "..." : articulo.getDescripcion();
                            articulo.setDescripcion(descripcionArticulo);
                            
                            matchSolicitado.setArticulo(articulo);
                        }
                        
                      matchSolicitado.setUsuarioSolicitado(usuarioSolicitado);
                      matchSolicitado.setMatch(match);
                    
                      matchSolicitadoCompleto.add(matchSolicitado);
                  }
              }
               
               return matchSolicitadoCompleto;
          }
          
          //Obtiene todas las solicitudes de match recibidas del usuario en sesión.
          public List<MatchDto> obtenerMatchRecibidos(final Usuario usuarioSolicitado){
                   
                
              List<MatchDto> matchRecibidoCompleto = new ArrayList<>();
                                         
                        
               for (MatchT match :  matchtRepository.obtenerMatchRecibidos(usuarioSolicitado.getId())) {
                   
                  Usuario usuarioSolicitante = usuarioRepository.findById(match.getUsuario_solicitante()).get();
                  
                  if(usuarioSolicitante != null){
                      
                      MatchDto matchRecibido = new MatchDto();
                    
                        if(usuarioSolicitante.getRol() == RolEnum.EDITOR.getId() && match.getId_articulo_match() != null){
                            
                            Articulo articulo = articuloRepository.findById(match.getId_articulo_match()).get();
                            
                            String descripcionArticulo = articulo.getDescripcion().length() > 14 ? articulo.getDescripcion().substring(0, 13) + "..." : articulo.getDescripcion();
                            articulo.setDescripcion(descripcionArticulo);
                            
                            matchRecibido.setArticulo(articulo);
                        }
                        
                      matchRecibido.setUsuarioSolicitante(usuarioSolicitante);
                      matchRecibido.setMatch(match);

                      matchRecibidoCompleto.add(matchRecibido);
                      
                  }
              }
               
               return matchRecibidoCompleto;
          }
          
          
          
          public MatchT aceptarMatch(final MatchDto matchT) throws MessagingException{
              
              MatchT match = matchtRepository.findById(matchT.getMatch().getId()).get();
              
              match.setEstado(EstadoMatchEnum.ACEPTADA.getId());
              
              Usuario usuarioSolicitante = usuarioRepository.findById(matchT.getMatch().getUsuario_solicitante()).get();
              Usuario usuarioSolicitado = usuarioRepository.findById(matchT.getMatch().getUsuario_solicitado()).get();
              
              match.setFechaAceptacion(new Date());
              	
              correoController.sendEmail(usuarioSolicitante.getCorreo(),usuarioSolicitante.getNombre(), usuarioSolicitado.getNombre());
           
              
              return matchtRepository.save(match);
              
          }
          
            public MatchT rechazarMatch(final MatchDto matchT){
              
              MatchT match = matchtRepository.findById(matchT.getMatch().getId()).get();
              
              match.setEstado(EstadoMatchEnum.RECHAZADA.getId());
              match.setFechaRechazo(new Date());
           
              
              return matchtRepository.save(match);
              
          }
            
           public List<MatchDto> obtenerMatchExitosos(Usuario usuario){
               
               List<MatchDto> matchRecibidoCompleto = new ArrayList<>();
               List<MatchT> matchsExitosos = matchtRepository.obtenerMatchExitosos(usuario.getId());            
                        
                for (MatchT match  : matchsExitosos ) {
                   
                     Usuario usuarioAutor = usuarioRepository.findById(match.getId_autor()).get();
   
                     Usuario usuarioEditor = usuarioRepository.findById(match.getId_editor()).get();
                          
                      MatchDto matchExitoso = new MatchDto();
                                   
                      matchExitoso.setAutor(usuarioAutor);
                      matchExitoso.setEditor(usuarioEditor);            
                        
                      if (match.getId_articulo_match() != null) {
                          Articulo articulo = articuloRepository.findById(match.getId_articulo_match()).get();

                          String descripcionArticulo = articulo.getDescripcion().length() > 14 ? articulo.getDescripcion().substring(0, 13) + "..." : articulo.getDescripcion();
                          articulo.setDescripcion(descripcionArticulo);

                          matchExitoso.setArticulo(articulo);
                      } 
                        
                      
                      matchExitoso.setMatch(match);

                      matchRecibidoCompleto.add(matchExitoso);
                      
              }
               
               return matchRecibidoCompleto;
           }
           

                 
          
	  public void enviarCorreo(){

	}

}
