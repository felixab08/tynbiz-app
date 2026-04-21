import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'tyn-evidence',
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, NgClass],
  templateUrl: './evidence.component.html',
})
export default class EvidenceComponent {
  _router = inject(Router);
  demolink = true;
  constructor() {
    console.log(this._router.url);
  }
}
