package co.com.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.com.entities.Chat;

@Repository
public interface ChatRepository extends CrudRepository<Chat, Long> {

	
	
}
