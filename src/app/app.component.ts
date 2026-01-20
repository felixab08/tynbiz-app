import { FooterComponent } from './shared/footer/footer.component';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreService } from './services/store.service';
import { AlertService } from './services';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tynbiz-app';
  public storeService = inject(StoreService);
  public _alertService = inject(AlertService);
  ngOnInit(): void {
    initFlowbite();
  }
}
