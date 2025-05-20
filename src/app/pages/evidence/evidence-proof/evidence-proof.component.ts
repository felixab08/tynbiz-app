import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '@app/utils/form.util';

@Component({
  selector: 'tyn-evidence-proof',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './evidence-proof.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvidenceProofComponent {
  private _fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this._fb.group({
    nameCompany: ['', [Validators.required]],
    ruc: ['', [Validators.required, Validators.minLength(11)]],
    onlyneNameStore: ['', [Validators.required]],
    onlyneDirecctionStore: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.pattern(FormUtils.urlRegex),
      ],
    ],
    ubigeo: ['', [Validators.required]],
    direction: ['', [Validators.required]],
    categoriOnlineStore: ['', [Validators.required]],
    categoriOnlineStoreOther: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    phone: [
      ,
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
    namePerson: ['', [Validators.required]],
    lastNamePerson: ['', [Validators.required]],
    dniPerson: ['', [Validators.required, Validators.minLength(9)]],
  });

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Form submitted', this.myForm.value);
    this.myForm.reset();
  }
}
