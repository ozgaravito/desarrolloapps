package co.com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.com.entities.Autor;
import co.com.entities.Editor;
import co.com.entities.MatchT;
import co.com.repositories.EditorRepository;
import co.com.repositories.MatchTRepository;
import java.util.ArrayList;
import java.util.List;

@Component
public class EditorController {

	@Autowired
	EditorRepository editorRepository;
        
        @Autowired
        MatchTRepository matchTRepository;
	
	
	public boolean insertarEditor(Editor editor) {
		Editor editorInsert = new Editor();
		editorInsert.setNombre(editor.getNombre());
		editorInsert.setDescripcion(editor.getDescripcion());
		editorInsert.setCorreo(editor.getCorreo());
		editorInsert.setClave(editor.getClave());
		editorInsert.setEstado(1);
		editorInsert.setRol(editor.getRol());
		editorInsert.setNombreRevista(editor.getNombreRevista());
		editorInsert.setDescripcionRevista(editor.getDescripcionRevista());
		editorRepository.save(editor);
		Editor editorGuardado = editorRepository.save(editor);
		if(editorGuardado.getId() >= 0) return true;
		return false;
	}
	public List<Editor> traerEditores(final Autor autor){
		
            List<Editor> allEditores = editorRepository.findAll();
            List<Editor> allEditorSinSolicitud = new ArrayList<>();
            
            for (Editor editor : allEditores) {
                MatchT matchDeAutor = matchTRepository.findAllById_autorAndIdEditor(autor.getId(), editor.getId());
                if(matchDeAutor == null){
                    allEditorSinSolicitud.add(editor);
                }
            }
            
            return allEditorSinSolicitud;
	
        
        
        }
	
}
