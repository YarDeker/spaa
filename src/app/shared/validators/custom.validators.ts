import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const forbidden = forbiddenName.test(control.value);

    return forbidden
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}