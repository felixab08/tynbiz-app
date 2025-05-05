import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'tyn-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() reverse = false;
  @Input() name = 'Centeno Quispe Marcelino';
  @Input() title = 'CEO';
  @Input() description = 'Ingeniero de sistemas, con amplia experiencia en ventas y diseño UI/UX.';
  @Input() imageSrc = './assets/img/user.jpeg';
}
