import { Component } from '@angular/core';
import { IAppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'sport-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public footerConfig:IAppInfo = {
    title: 'FOOTER',
    year: new Date().getFullYear()
  }
}
