import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HeroCard } from '@app/interfaces/hero-card.interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'tyn-hero',
  imports: [TranslateModule, RouterLink],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  heroContent = input.required<HeroCard>();
}
