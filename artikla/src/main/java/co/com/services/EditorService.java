package co.com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.controllers.EditorController;
import co.com.entities.Autor;
import co.com.entities.Editor;
import co.com.entities.RespWS;
import co.com.entities.RespuestaWS;
import co.com.repositories.EditorRepository;
import java.util.List;

@RestController
public class EditorService {

	@Autowired(required=true)
	EditorRepository  editorRepository;

	@Autowired
	EditorController editorController;

	@RequestMapping("/obtenerEditores")
	public List<Editor> obtenerEditores(@RequestBody Autor autor){
            List<Editor> editor = editorController.traerEditores(autor);
            
            return editor;
	}

	@RequestMapping("/crearEditor")
	public RespWS crearEditor( @RequestBody Editor editor){
		try {
			RespuestaWS.usuarioRegistrado.setSuccess(editorController.insertarEditor(editor));

			if(RespuestaWS.usuarioRegistrado.getSuccess())
				return RespuestaWS.usuarioRegistrado;
			else return RespuestaWS.errorGuardarUsuario;
		} catch(Exception ex) {
			return RespuestaWS.errorGuardarUsuario;
		}
	}

	@RequestMapping("/buscarEditorPorId")
	public Editor obtenerEditorPorId(){
		return editorRepository.findById(1); 
	}

//	@RequestMapping("/editarEditor")
//	public boolean actualizarEditor(@RequestBody Editor editor){
//		boolean resultado = editorController.modificarEditor(editor);
//		return resultado;
//	}

}
