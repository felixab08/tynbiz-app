import { Injectable, signal, inject, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class MiltiLangService {
  _translateSrv = inject(TranslateService);

  languageSignal = signal<string>(
    JSON.parse(localStorage.getItem('lang') || '"es"')
  );

  /**
   *
   * @param lang - Language to set
   * @description This method updates the language signal and sets the language in local storage.
   */
  updateLanguage(lang: string): void {
    this.languageSignal.update(() => lang);
  }
  constructor() {
    effect(() => {
      localStorage.setItem('lang', JSON.stringify(this.languageSignal()));
      this._translateSrv.use(this.languageSignal());
    });
  }
}
