import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserCompany } from '@app/interfaces/hero-card.interface';

@Component({
  selector: 'tyn-about',
  imports: [UserCardComponent, TranslateModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  constructor(private translate: TranslateService) {}
  usersCompany: UserCompany[] = [
    {
      name: 'Centeno Quispe Marcelino',
      title: 'CEO Founder',
      description: 'about.team.user1_description',
      imageSrc: './assets/img/user.jpeg',
      reverse: false,
    },
    {
      name: 'Areste Palomino Roberth',
      title: 'CTO Founder',
      description: 'about.team.user2_description',
      imageSrc: './assets/img/user.jpeg',
      reverse: false,
    },
    {
      name: 'Aroni Huamani Fredy',
      title: 'COO Co-Founder',
      description: 'about.team.user3_description',
      imageSrc: './assets/img/user.jpeg',
      reverse: true,
    },
    {
      name: 'Valdez Ochoa David',
      title: 'Backend Full stack',
      description: 'about.team.user4_description',
      imageSrc: './assets/img/user.jpeg',
      reverse: true,
    },
  ];

  getTranslatedDescription(key: string): string {
    return this.translate.instant(key);
  }
}
