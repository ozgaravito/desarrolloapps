package co.com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import co.com.repositories.MensajeRepository;

@RestController
public class MensajeService {

	@Autowired(required=true)
	MensajeRepository mensajeRepository;
	
}
