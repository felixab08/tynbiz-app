import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'tyn-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class UserCardComponent {

  @Input() name: string = '';
@Input() title: string = '';
@Input() description: string = '';
@Input() imageSrc: string = '';
@Input() reverse: boolean = false;

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
