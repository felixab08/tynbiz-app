import { FormGroup } from '@angular/forms';

export class FormUtils {
  // [TODO] expresiones regulares
  static isValiedField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `El campo es requerido`;
        case 'minlength':
          return `El campo debe ser al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El campo debe ser mayor que ${errors['min'].min}`;
        default:
          return null;
      }
    }
    return null;
  }
}
