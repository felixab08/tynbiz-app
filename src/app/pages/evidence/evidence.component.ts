import { CommonModule, JsonPipe } from '@angular/common';
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
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './evidence.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EvidenceComponent {
  private _fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    phone: [, [Validators.required, Validators.min(9)]],
    onlyneNameStore: ['', [Validators.required]],
    onlyneDirecctionStore: [
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
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Form submitted', this.myForm.value);
    this.myForm.reset();
  }
}
