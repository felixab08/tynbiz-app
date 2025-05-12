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
import { environment } from '@environments/environment.development';
import { PROYECT, TRADUCTION } from '@app/contantes/proyect.constant';
@Component({
  selector: 'tyn-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // [TODO] : create a variable in enviroment file
  lenguagesName = TRADUCTION.spanish;
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
      this.lenguagesName = TRADUCTION.english;
      this._multiLanguageSrv.updateLanguage('en');
    }
    if (lang === 'es') {
      this.lenguagesName = TRADUCTION.spanish;
      this._multiLanguageSrv.updateLanguage('es');
    }
  }
}
