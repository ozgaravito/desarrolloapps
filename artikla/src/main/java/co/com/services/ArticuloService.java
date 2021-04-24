package co.com.services;

import java.util.ArrayList;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import co.com.controllers.ArticuloController;
import co.com.entities.Articulo;
import co.com.entities.Autor;
import co.com.entities.Categoria;
import co.com.entities.RespWS;
import co.com.entities.RespuestaWS;
import co.com.entities.Rol;
import co.com.negocio.ArticuloDto;
import co.com.repositories.ArticuloRepository;
import co.com.repositories.AutorRepository;


@RestController
public class ArticuloService  {

	@Autowired(required=true)
	ArticuloRepository  articuloRepository;

	@Autowired(required=true)
	AutorRepository autorRepository;

	@Autowired(required=true)
	ArticuloController articuloController;

	@RequestMapping("/traerArticulo")
	public Articulo consultarArticulo() {
		return articuloRepository.findById(1);
	}

	@RequestMapping("/eliminarArticulo")
	public RespWS eliminarArticulo(@RequestBody Articulo articulo) {
		try {
			RespuestaWS.articuloEliminado.setSuccess(articuloController.eliminarArticulo(articulo));
			
			if(RespuestaWS.articuloEliminado.getSuccess())
				return RespuestaWS.articuloEliminado;
			else return RespuestaWS.errorEliminarArticulo;
		} catch(Exception ex) {
			return RespuestaWS.errorEliminarArticulo;
		}
	}

	@RequestMapping("/editarArticulo")
	public void editarArticulo(@RequestBody Articulo articulo) {
		articuloController.modificarArticulo(articulo);
	}


	@RequestMapping(value="/agregarArticulo", method= RequestMethod.POST) 
	public void agregarArticulo(@RequestBody Articulo articulo){
		articuloController.agregarArticulo(articulo);
	}

}