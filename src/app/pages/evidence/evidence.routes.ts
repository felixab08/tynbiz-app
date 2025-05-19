import { Routes } from '@angular/router';
import { EvidenceDemoComponent } from './evidence-demo/evidence-demo.component';
import { EvidenceProofComponent } from './evidence-proof/evidence-proof.component';
import EvidenceComponent from './evidence.component';

export const evidenceRoutes: Routes = [
  {
    path: '',
    component: EvidenceComponent,
    children: [
      {
        path: 'demo',
        component: EvidenceDemoComponent,
      },
      {
        path: 'proof',
        component: EvidenceProofComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'demo',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'demo',
      },
    ],
  },
];
export default evidenceRoutes;
