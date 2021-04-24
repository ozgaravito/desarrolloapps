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
public enum EstadoMatchEnum {
    
    PENDIENTE(1, "Solicitud Pendiente"),
    RECHAZADA(2, "Solicitud Rechazada"),
    ACEPTADA(3, "Solicitud Aceptada"),
    DESCARTADO(4, "Match Descartado");
    
    private int id;
    private String codigo;
    
    EstadoMatchEnum(final int id, final String codigo){
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
