package co.com.controllers;


import co.com.entities.Articulo;
import co.com.entities.ArticulosMatch;
import co.com.entities.Autor;
import co.com.entities.Rol;
import co.com.negocio.ArticuloDto;
import co.com.negocio.RolEnum;
import co.com.repositories.ArticuloRepository;
import java.util.Date;
import java.util.List;
import org.hibernate.Hibernate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ArticuloController{

	@Autowired(required=true)
	ArticuloRepository articuloRepository;
        
    public List<Articulo> buscarArticulos(){
    	return articuloRepository.findAll();
    }
    public void modificarArticulo(Articulo articulo) {
    	Articulo articuloDB = new Articulo();
    	articuloDB=articuloRepository.findById(articulo.getId());
    	articuloDB.setCategorias(articulo.getCategorias());
    	articuloDB.setTitulo(articulo.getTitulo());
    	articuloDB.setDescripcion(articulo.getDescripcion());
    	articuloRepository.save(articuloDB);
    }
    
    public void agregarArticulo(final Articulo articulo){
        
        Rol rol = new Rol();
        rol.setDescripcion("autor");
        
        Autor autor = new Autor();
        autor.setId(articulo.getAutor().getId());
        autor.setRol(RolEnum.AUTOR.getId());
        autor.setNombre(articulo.getAutor().getNombre());
        
        
        articulo.setTitulo(articulo.getTitulo());
        articulo.setDescripcion(articulo.getDescripcion());
        articulo.setAutor(autor);
        articulo.setFechaPublicacion(new Date());
        
        articulo.setCategorias(articulo.getCategorias());
              
        articuloRepository.save(articulo);
        
    }
    
    public boolean eliminarArticulo(Articulo articulo) {
    	articuloRepository.deleteById(articulo.getId());
    	return true;
    }
       
    public List<Articulo> buscarArticulosInicio() {
    	List<Articulo> articulosObj;
    	articulosObj = articuloRepository.findAll();
    	
        for (Articulo articulo : articulosObj) {
                Object unproxy = Hibernate.unproxy(articulo.getAutor());
        }
        
    	//int cantArticulos = count(articulosObj);
    	//for (int i = 0; i < articulosObj.length; i++) {
			
		//}
    	return articulosObj;
    }
   
}
