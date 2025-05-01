import { ChangeDetectionStrategy,  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tyn-carousel-logo',
  imports: [CommonModule],
  templateUrl: './carousel-logo.component.html',
  styleUrls: ['./carousel-logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselLogoComponent  implements AfterViewInit{
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  logos = [
    './assets/1.png',
    './assets/2.png',
    './assets/3.png',
    './assets/4.png',
    './assets/5.png',
    './assets/6.png',
    './assets/7.png',
    './assets/8.png',
    './assets/9.png',
    './assets/10.png'
  ];
  ngAfterViewInit() {
    const sliderElement = this.slider.nativeElement;
    sliderElement.innerHTML += sliderElement.innerHTML; // Duplica los logos para un loop continuo
  }




}
