import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('senha').value;

       let confirmPassword = control.get('confirmSenha').value;

        if(password != confirmPassword) {
            control.get('confirmSenha').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}