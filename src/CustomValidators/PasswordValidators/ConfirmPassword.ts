import { AbstractControl } from "@angular/forms";

export function  ConfirmPasswordValidators(control:AbstractControl)
{
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    if(password?.pristine||confirmPassword?.pristine)
    {
        return null;
    }
   
    // console.log( password&&confirmPassword&&password?.value!=confirmPassword?.value?
    //     {'MisMatch':true}:null)
    return password&&confirmPassword&&password?.value!=confirmPassword?.value?
    {MisMatch:true}:null
}