import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { CarouselLogoComponent } from "../../components/carousel-logo/carousel-logo.component";

@Component({
  selector: 'tyn-home',
  imports: [HeroComponent, CarouselLogoComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
