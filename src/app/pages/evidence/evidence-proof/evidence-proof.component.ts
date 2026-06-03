import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertService,
  CategoryService,
  FileDocumentsService,
  GeographicService,
  ICategory,
  IUbigeo,
} from '@app/services';
import { SuscriptionService } from '@app/services/suscription.service';
import { FormUtils } from '@app/utils/form.util';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IErrorGeneralResp } from '@app/interfaces/error.interface';
import { IGeneralPDF } from '@app/interfaces';
import { ConditionModal } from '@app/components';

@Component({
  selector: 'tyn-evidence-proof',
  imports: [ReactiveFormsModule, CommonModule, ConditionModal, PdfViewerModule],
  templateUrl: './evidence-proof.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvidenceProofComponent {
  private _fb = inject(FormBuilder);
  departamentos = signal<string[]>(['']);
  provincias = signal<string[]>(['']);
  distritos = signal<IUbigeo[]>([]);
  listCategory = signal<ICategory[]>([]);
  listPlans = signal<any[]>([]);
  selectedDepartamento = signal<string>('');
  public isOpen: boolean = false;
  pdfSrc = './assets/pdf/documento.pdf'; // Ruta local o URL
  private _fileDocSrv = inject(FileDocumentsService);
  filesResp = signal<IGeneralPDF[] | null>(null); // Ruta local o URL
  formUtils = FormUtils;
  private _geographicSrv = inject(GeographicService);
  private _categorySrv = inject(CategoryService);
  private _alertService = inject(AlertService);
  private _suscriptionSrv = inject(SuscriptionService);
  private _router = inject(Router);

  constructor() {
    this.getDepartamento();
    this.getCategories();
    this.getSubscriptionsPlans();
  }
  getCategories() {
    this._categorySrv.getCategories().subscribe({
      next: (resp) => {
        this.listCategory.set(resp);
      },
    });
  }
  getSubscriptionsPlans() {
    this._categorySrv.getSubscriptionsPlans().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listPlans.set(resp);
      },
    });
  }

  getDepartamento() {
    this._geographicSrv.getDepartamento().subscribe({
      next: (resp) => {
        this.departamentos.set(resp);
      },
    });
  }
  handlerDepartamento(event: any) {
    this.selectedDepartamento.set(event.value);
    this._geographicSrv.getProvincias(event.value).subscribe({
      next: (resp) => {
        this.provincias.set(resp);
      },
    });
  }
  handlerProvincia(event: any) {
    this._geographicSrv
      .getDistrito(this.selectedDepartamento(), event.value)
      .subscribe({
        next: (resp) => {
          this.distritos.set(resp);
        },
      });
  }

  getFileDocumentsByClient() {
    this._fileDocSrv.getFileDocumentsByClient().subscribe({
      next: (data) => {
        this.filesResp.set(data);
      },
      error: (error) => {
        this._alertService.getAlert(
          'Error!!!',
          error.error.detail || 'Error al obtener los documentos',
          'error',
        );
      },
    });
  }

  myForm: FormGroup = this._fb.group({
    businessName: ['', [Validators.required]],
    ruc: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.max(99999999999),
        Validators.min(10000000000),
      ],
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
    ubigeoId: ['', [Validators.required]],
    address: ['', []],
    storeCategory: ['', [Validators.required]],
    businessEmail: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    businessPhone: [
      ,
      [Validators.required, Validators.minLength(9), Validators.maxLength(9)],
    ],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    documentType: [
      'DNI',
      [Validators.required, Validators.min(10000000), Validators.max(99999999)],
    ],
    documentNumber: ['', [Validators.required, Validators.minLength(8)]],
    planId: ['', [Validators.required]],
  });

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this._suscriptionSrv.postSuscription(this.myForm.value as any).subscribe({
      next: (resp) => {
        this._alertService.getAlert(
          'Bien!!!',
          'subscripción creada correctamente',
          'success',
        );
        this.myForm.reset();
        this._router.navigate(['/home']);
      },
      error: (error: IErrorGeneralResp) => {
        console.log('error', error.error);
        this._alertService.getAlert(
          'Error!!!',
          error.error.detail || 'Ocurrió un error al crear la subscripción',
          'error',
        );
      },
    });
  }

  onClose() {
    this.myForm.reset();
    this._router.navigate(['/home']);
  }
  closeModal() {
    this.isOpen = false;
  }
  condicionCloseModal(event: boolean) {
    this.isOpen = event;
  }
}
