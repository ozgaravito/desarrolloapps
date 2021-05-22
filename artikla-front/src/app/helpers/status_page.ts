import { Router } from '@angular/router';
import { RespuestaWS } from '../interfaces/respueta.ws';
import { RespuestasWS } from './Constantes/respuestasWS';
import { _respWS } from './Constantes/Enums/cod_respuestasWS';
import { Usuario } from '../entidades/user';
import { modalInfo } from '../interfaces/modal.info';
import { Output, EventEmitter } from '@angular/core';

export class StatusPage {
    constructor(public router : Router) {}
    public loading : Boolean;
    public success : Boolean = false;
    public modal : Boolean;
    public modalInfo : modalInfo = { mostrarModal: false };
    public requestMsj : Array<string>

    onRedirect(redirect : string, ...param) {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            if(redirect.includes("http")) window.location.href = redirect;
            else if(param.length > 0) {
                this.router.navigate([redirect, {p: param}]);
            } else this.router.navigateByUrl(redirect);
        }, 0);
    }
    
    mensajePorMostrar(MsgResponse : RespuestaWS) : boolean {
        let showMsg = false;
        console.log(_respWS);
        Object.values(new RespuestasWS()).forEach((r : RespuestaWS) => {
            //El WS retorna el key del enum
            console.log(r);
            if(_respWS[r.codigo] == MsgResponse.codigo.toString() && MsgResponse.mensaje != null 
                && MsgResponse.mensaje != undefined && r.mostrar) {
                showMsg = true;
                return;
            }
        });
        return showMsg;
    }

    guardarUsuarioLocalStorage(usuario : Usuario) {
        localStorage.setItem("Usuario", JSON.stringify(usuario));
    }

    eliminarUsuarioLocalStorage() {
        localStorage.removeItem("Usuario");
    }

    obtenerUsuarioLocalStorage() : Usuario {
        let usuario : Usuario = { id: -1 };
        try {
            return <Usuario>JSON.parse(localStorage.getItem('Usuario')) ?? usuario;
        } catch(ex) { return usuario; }
    }

    mostrarModal() {
        console.log("llego");
        this.modalInfo.mostrarModal = true;
    }

    cerrarModal() {
        this.modalInfo.mostrarModal = false;
    }
    
    viewPass(eye, inputID) {
        eye.classList.toggle("fa-eye");
        eye.classList.toggle("fa-eye-slash");
        var input = document.getElementById(inputID);
        if (input.getAttribute("type") == "password") {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    }
}