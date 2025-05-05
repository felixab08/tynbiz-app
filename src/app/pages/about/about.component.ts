import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'tyn-about',
  imports: [UserCardComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent { }
