package co.com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import co.com.repositories.ChatRepository;

@RestController
public class ChatService {

	@Autowired(required=true)
	ChatRepository chatRepository;
	
}
