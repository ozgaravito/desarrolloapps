package co.com.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import co.com.entities.Autor;

@Repository
public interface AutorRepository extends CrudRepository<Autor, Long> {
	

        @Override
	public List<Autor> findAll();
        
	public Autor findById(long id);
}
