import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'tyn-evidence',
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './evidence.component.html',
})
export default class EvidenceComponent {
  _router = inject(Router);
}
