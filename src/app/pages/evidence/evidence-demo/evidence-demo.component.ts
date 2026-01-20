import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, DemoService } from '@app/services';
import { FormUtils } from '@app/utils/form.util';

@Component({
  selector: 'tyn-evidence-demo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './evidence-demo.component.html',
})
export class EvidenceDemoComponent {
  private _fb = inject(FormBuilder);
  private _router = inject(Router);
  private _demoService = inject(DemoService);
  private _alertService = inject(AlertService);

  formUtils = FormUtils;

  myForm: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    phoneNumber: [
      ,
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
    storeName: ['', [Validators.required]],
    storeUrl: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern(FormUtils.urlRegex),
      ],
    ],
    message: [''],
  });

  onSave() {
    // if (this.myForm.invalid) {
    //   this.myForm.markAllAsTouched();
    //   return;
    // }
    // console.log('Form submitted', this.myForm.value);
    // this._demoService.postDemo(this.myForm.value as any).subscribe({
    //   next: (resp) => {
    //     this.myForm.reset();
    this._alertService.getAlert(
      'Bien!!!',
      'Demo creado correctamente',
      'success',
    );
    // this._router.navigate(['/home']);
    //     },
    //     error: (error: any) => {
    //       console.log('error', error);
    //       this._alertService.getAlert(
    //         'Error!!!',
    //         'Error al crear el demo, intentalo de nuevo mas tarde',
    //         'error',
    //       );
    //     },
    //   });
    //   this.myForm.reset();
  }
}
