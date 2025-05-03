import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'tyn-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  lenguagesName = 'Español (ES)';
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
  changeLanguage(lang: string) {
    if (lang === 'en') {
      this.lenguagesName = 'English (US)';
    }
    if (lang === 'es') {
      this.lenguagesName = 'Español (ES)';
    }
    console.log('Felix:::::> changeLanguage', lang);
    // localStorage.setItem('lang', lang);
    // window.location.reload();
  }
}
