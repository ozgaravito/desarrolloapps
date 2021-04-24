package co.com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.controllers.CorreoController;
import co.com.controllers.MatchTController;
import co.com.entities.Articulo;
import co.com.entities.ArticulosMatch;
import co.com.entities.Autor;
import co.com.entities.MatchT;
import co.com.entities.RespWS;
import co.com.entities.RespuestaWS;
import co.com.entities.Usuario;
import co.com.negocio.MatchDto;
import javax.mail.MessagingException;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
public class MatchTService {
	
	@Autowired
	MatchTController matchtController;
	
	@Autowired
	CorreoController correoController;
	
	
	@RequestMapping(value="/solicitarMatch", method= RequestMethod.POST) 
	public RespWS crearMatch(@RequestBody MatchT match){
           
            RespWS res = null;
            MatchT matchNuevo = matchtController.solicitarMatch(match);
	
            return RespuestaWS.matchSolicitado;
	}
        
        @RequestMapping(value="/descartarMatch", method= RequestMethod.POST) 
	public RespWS descartarMatch(@RequestBody MatchT match){
           
            matchtController.descartarMatch(match);
	
            return RespuestaWS.matchDescartado;
	}
        
   @RequestMapping("/traerArticulos")
    public List<Articulo> buscarArticulos(){
        return matchtController.buscarArticulosInicio();
    }
    
    
    @RequestMapping("/obtenerPosiblesMatchAutores")
    public List<Autor> obtenerPosiblesMatchAutores(@RequestBody Long idEditor){
        return matchtController.obtenerPosiblesMatchAutores(idEditor);
    }
    
        @RequestMapping("/obtenerMatchsSolicitados")
    public List<MatchDto> obtenerMatchsSolicitados(@RequestBody Usuario usuarioSolicitante){
        return matchtController.obtenerMatchSolicitados(usuarioSolicitante);
    }
    
    @RequestMapping("/obtenerMatchRecibidos")
    public List<MatchDto> obtenerMatchRecibidos(@RequestBody Usuario usuarioSolicitado){
        return matchtController.obtenerMatchRecibidos(usuarioSolicitado);
    }
    
    
        @RequestMapping("/aceptarMatch")
    public MatchT aceptarMatch(@RequestBody MatchDto match) throws MessagingException{
        return matchtController.aceptarMatch(match);
    }

      @RequestMapping("/rechazarMatch")
    public MatchT rechazarMatch(@RequestBody MatchDto match){
        return matchtController.rechazarMatch(match);
    }
    
     @RequestMapping("/obtenerMatchExitosos")
    public List<MatchDto> obtenerMatchExitosos(@RequestBody Usuario usuario){
        return matchtController.obtenerMatchExitosos(usuario);
    }
    
    
	
}
