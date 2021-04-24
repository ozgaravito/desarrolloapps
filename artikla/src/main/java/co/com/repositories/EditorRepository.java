package co.com.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.com.entities.Editor;
@Repository
public interface EditorRepository extends CrudRepository<Editor, Long> {

	public List<Editor> findAll();
	public Editor findById(long id);
	
}
