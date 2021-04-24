package co.com.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import co.com.entities.MatchT;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface MatchTRepository extends CrudRepository<MatchT, Long>{
	
	public MatchT findById(long id);
	public MatchT findByIdArticuloAndIdEditor(long id_articulo_match, long id_editor);
        
        @Query("SELECT u from MatchT u where u.id_autor = ?1 and u.idEditor = ?2 and u.idArticulo = ?3")
        MatchT findAllByIdAutorAndId_editorAndIdArticulo(Long idAutor, Long idEditor, Long idArticulo);
        
        @Query("SELECT u from MatchT u where u.id_autor = ?1 and u.idEditor = ?2 and u.idArticulo is null")
        MatchT findAllById_autorAndIdEditor(final Long idAutor, final Long idEditor);
        
        @Query("SELECT u from MatchT u where u.usuario_solicitante = ?1 and u.estado not in(3)")
        List<MatchT> obtenerMatchSolicitados(final Long idUsuarioSolicitante);
        
         @Query("SELECT u from MatchT u where u.usuario_solicitado = ?1 and u.estado not in(2,3)")
        List<MatchT> obtenerMatchRecibidos(final Long idUsuarioSolicitado);
         
        @Query("SELECT u from MatchT u where (u.id_autor = ?1 or u.idEditor = ?1) and u.estado = 3")
        List<MatchT> obtenerMatchExitosos(final Long idUsuario);
}
