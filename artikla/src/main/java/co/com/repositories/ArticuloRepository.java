package co.com.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import co.com.entities.Articulo;
import co.com.negocio.ArticuloDto;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticuloRepository extends CrudRepository<Articulo,Long>{

		Articulo findById(long id);
        List<Articulo> findAllById(final Long id);
         @Override
        List<Articulo> findAll();
        void deleteById(Long id);
        //Interfaz creadda de iArticuloService
        //List<Articulo> findAll();
        //List<Articulo> listarById(final Long idUsuario);
        //Articulo agregarArticuloDto(final ArticuloDto articulo );
        //Articulo editarArticulo(final Long idArticulo, final Long idUsuario);
        //Articulo eliminarArticulo(final Long idArticulo, Long idUsuario);
}
