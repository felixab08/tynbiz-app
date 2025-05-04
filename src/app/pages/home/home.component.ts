import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarouselLogoComponent } from '../../components/carousel-logo/carousel-logo.component';

@Component({
  selector: 'tyn-home',
  imports: [HeroComponent, CarouselLogoComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  headerHero = {
    title: 'home.header_hero.title',
    subtitle: 'home.header_hero.subtitle',
    description: 'home.header_hero.description',
    button: 'home.header_hero.button',
    demo: 'home.header_hero.demo',
    imageUrl: './assets/hero-header.jpg',
  };
}
