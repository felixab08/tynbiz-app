import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tyn-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }
