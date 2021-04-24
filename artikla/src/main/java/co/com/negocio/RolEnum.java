/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.negocio;

/**
 *
 * @author Usuario
 */
public enum RolEnum {
    
    AUTOR(1, "Autor"),
    EDITOR(2, "Editor");
    
    private int id;
    private String codigo;
    
    RolEnum(final int id, final String codigo){
        this.id = id;
        this.codigo = codigo;
              
    }
    
    public int getId(){
        return this.id;
    }
    
    public String getCodigo(){
        return this.codigo;
    }
    
}
