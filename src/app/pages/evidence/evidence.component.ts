import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '@app/utils/form.util';

@Component({
  selector: 'tyn-evidence',
  imports: [ReactiveFormsModule],
  templateUrl: './evidence.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EvidenceComponent {
  private _fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.min(0)]],
    phone: [0, [Validators.required, Validators.min(9)]],
    onlyneNameStore: ['', [Validators.required, Validators.min(0)]],
    onlyneDirecctionStore: ['', [Validators.required, Validators.min(0)]],
    message: ['', [Validators.required, Validators.min(0)]],
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
