import { ChangeDetectionStrategy,  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'tyn-carousel-logo',
  imports: [],
  templateUrl: './carousel-logo.component.html',
  styleUrls: ['./carousel-logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselLogoComponent  implements AfterViewInit{
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  logos = [
    './assets/img/1.png',
    './assets/img/2.png',
    './assets/img/3.png',
    './assets/img/4.png',
    './assets/img/5.png',
    './assets/img/6.png',
    './assets/img/7.png',
    './assets/img/8.png',
    './assets/img/9.png',
    './assets/img/10.png'
  ];
  ngAfterViewInit() {
    const sliderElement = this.slider.nativeElement;
    sliderElement.innerHTML += sliderElement.innerHTML; // Duplica los logos para un loop continuo
  }
}
