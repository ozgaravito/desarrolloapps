package co.com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import co.com.entities.Categoria;
import co.com.repositories.CategoriaRepository;

@RestController
public class CategoriaService {

	
	@Autowired(required=true)
	CategoriaRepository categoriaRepository;
	
	
	@RequestMapping("/insertarCategoria")
	public Categoria crearCategoria(Categoria categoria){
		return categoriaRepository.save(categoria);
	}
	
	@RequestMapping("/insertarIntereses")
	public boolean crearInteresesUsuario(Long idUser, int[] intereses){
		for (int i= 0;  i< intereses.length; i++) {
		}
		return true;
	}
	
	@RequestMapping("/obtenerCategorias")
	public Iterable<Categoria> obtenerCategorias(){
		return categoriaRepository.findAll();
	}
	
}
