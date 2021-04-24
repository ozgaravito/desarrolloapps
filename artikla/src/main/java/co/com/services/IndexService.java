/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.com.services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Usuario
 */
public class IndexService {
    
    @ResponseBody   
    @RequestMapping("/helloWorld")
    @CrossOrigin("https://artikla.azurewebsites.net")
    public String helloWorld(){
        return "hello world";
    }
}
