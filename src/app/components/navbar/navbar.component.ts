import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MiltiLangService } from '../../services/multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'tyn-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // [TODO] : create a variable in enviroment file
  lenguagesName = 'Español (ES)';
  scrolled = false;
  _multiLanguageSrv = inject(MiltiLangService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  /**
   *
   * @param lang - Language to set
   * @description This method updates the language signal and sets the language in local storage.
   */
  changeLanguage(lang: string) {
    if (lang === 'en') {
      // [TODO] : create a variable in enviroment file
      this.lenguagesName = 'English (US)';
      this._multiLanguageSrv.updateLanguage('en');
    }
    if (lang === 'es') {
      // [TODO] : create a variable in enviroment file
      this.lenguagesName = 'Español (ES)';
      this._multiLanguageSrv.updateLanguage('es');
    }
  }
}
