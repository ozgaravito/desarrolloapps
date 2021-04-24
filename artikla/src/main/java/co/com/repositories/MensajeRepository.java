package co.com.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.com.entities.Mensaje;

@Repository
public interface MensajeRepository extends CrudRepository<Mensaje, Long> {

}
