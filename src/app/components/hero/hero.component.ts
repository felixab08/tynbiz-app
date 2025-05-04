import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HeroCard } from '@app/interfaces/hero-card.interface';
@Component({
  selector: 'tyn-hero',
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  heroContent = input.required<HeroCard>();
}
