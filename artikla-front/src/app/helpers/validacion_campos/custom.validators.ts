import { ValidationErrors, AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export function isNotNumber() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const pattern = /[0-9]/; // /[0-9]+(\.[0-9][0-9]?)?/ - /^[0-9]*$/
        
        if(control.value == 0) return null;
        let value : string = (control.value && parseInt(control.value) >= 0)? control.value : "-",
            isInvalid = false;

        for(let char of value.toString()) {
            // console.log(parseInt(char)+": "+pattern.test(char)+" | "+isNaN(parseInt(char)));
            if(!pattern.test(char) && isNaN(parseInt(char))) {
                isInvalid = true;
                break;
            }
        }
        return (isInvalid)? { "isNotNumber" : true } : null;
    }
}

export function isNotLetter() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const pattern = /[a-zA-Z ,ñÑáéíóúÁÉÍÓÚ]/;
        let value : string = control.value || "", IsInvalid = false;

        for(let char of value) {
            if(!pattern.test(char) || !isNaN(parseInt(char))) {
                IsInvalid = true;
                break;
            }
        }
        return (IsInvalid)? { "isNotLetter": true } : null;
    }
}