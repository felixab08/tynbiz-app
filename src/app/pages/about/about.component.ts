import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserCompany } from '@app/interfaces/hero-card.interface';
import { COMPANYS } from '@app/contantes/proyect.constant';

@Component({
  selector: 'tyn-about',
  imports: [UserCardComponent, TranslateModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(private translate: TranslateService) {}
  usersCompany: UserCompany[] = COMPANYS;

  getTranslatedDescription(key: string): string {
    return this.translate.instant(key);
  }
}
