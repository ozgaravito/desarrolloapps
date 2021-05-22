import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export interface GrupoValidaciones {
    validators : Array<ValidatorFn>, //Grupo de validaciones por campo
    validatorsMsg : IValidationMsg, //Grupo de mensajes por validación
    showMsg : string //Mensaje qe se mostrará al usuario
}

//Mensajes de validación:
interface IValidationMsg {
    required? : string,
    minLength? : string,
    maxLength? : string,
    pattern? : string,
    isNotNumber? : string,
    isNotLetter? : string,
    valorMoney? : string,
    min? : string,
    max? : string,
    email? : string
    fechaFuturo? : string
    menorDeEdad? : string
    fechaMenor? : string
}


/**
 * @author Daniel Quintero
 * @description Función para definir el mensaje de error de un campo:
 * @param OBJ_MSJ 
 * @param codigoMsj 
 */
export function MensajeCampo(control: AbstractControl, validators: any  ): string {
    let msg = null;
    if ((control.touched || control.dirty) && control.errors) {
      for(let error of Object.keys(control.errors)) {
        error = (error === "maxlength")? "maxLength" : error ==="minlength" ? "minLength" : error;
        if(validators[error] != undefined) {
            msg = validators[error] || "";
            break;
        }
      };
    }
    return msg;
}