import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ElementRef,
  input,
} from '@angular/core';
import { UserCompany } from '@app/interfaces/hero-card.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tyn-user-card',
  imports: [CommonModule, TranslateModule],
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class UserCardComponent {
  usersCompany = input.required<UserCompany[]>();

  showExtra = false;

  @ViewChild('cardContainer') cardRef!: ElementRef;

  checkHoverRegion(event: MouseEvent) {
    const cardRect = this.cardRef.nativeElement.getBoundingClientRect();
    const mouseY = event.clientY;
    const bottomEdge = cardRect.bottom;

    // Si el mouse está dentro de los últimos 50px del card
    if (bottomEdge - mouseY <= 50) {
      this.showExtra = true;
    } else {
      this.showExtra = false;
    }
  }
}
