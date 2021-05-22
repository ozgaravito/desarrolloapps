import { GrupoValidaciones } from 'src/app/interfaces/interface.validators';
import { Validators } from '@angular/forms';
import { isNotLetter } from './custom.validators';

export class VALIDACIONES_USUARIO {
    
    public correoUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.email,
            Validators.maxLength(50),
            Validators.minLength(3)
        ],
        validatorsMsg : {
            required: "Ingresa tu correo electrónico",
            maxLength: "Correo incorrecto",
            minLength: "Correo incorrecto",
            email: "Correo incorrecto"
        },
        showMsg: ""
    }

    public passwordLoginVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(15),
        ],
        validatorsMsg : {
            required: "Ingresa la contraseña",
            maxLength: "Contraseña incorrecta",
        },
        showMsg: ""
    }

    public passwordUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(8),
            Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
        ],
        validatorsMsg : {
            required: "Ingresa la contraseña",
            maxLength: "La contraseña debe contener de 8 a 15 caracteres",
            minLength: "La contraseña debe contener de 8 a 15 caracteres",
            pattern: `La contraseña debe contener al menos:
            1 letra mayúscula
            1 letra minúscula
            1 número
            1 caracter especial (#?!@$%^&*-)`
        },
        showMsg: ""
    }
    
    public passwordConfirmVal : GrupoValidaciones = {
        validators: this.passwordLoginVal.validators,
        validatorsMsg : this.passwordLoginVal.validatorsMsg,
        showMsg: ""
    }

    public nombreUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(50),
            Validators.minLength(2),
            isNotLetter()
        ],
        validatorsMsg : {
            required: "Ingresa tu nombre",
            maxLength: "Nombre incorrecto",
            minLength: "Nombre incorrecto",
            isNotLetter: "Nombre incorrecto",
        },
        showMsg: ""
    }

    public descripcionUsuarioVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(255),
        ],
        validatorsMsg : {
            required: "Queremos saber algo de ti",
            maxLength: "Demasiada información",
        },
        showMsg: ""
    }

    public rolVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(2),
        ],
        validatorsMsg : {
            required: "Ingresa el rol",
            maxLength: "Rol incorrecto",
        },
        showMsg: ""
    }

    //EDITOR:
    public nombreRevistaVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(50),
        ],
        validatorsMsg : {
            required: "Ingresa el nombre de la revista",
            maxLength: "Nombre de revista incorrecto",
        },
        showMsg: ""
    }

    public descripcionRevistaVal : GrupoValidaciones = {
        validators: [
            Validators.required,
            Validators.maxLength(1000),
        ],
        validatorsMsg : {
            required: "Ingresa la descripción de la revista",
            maxLength: "Demasiada información",
        },
        showMsg: ""
    }
    
}