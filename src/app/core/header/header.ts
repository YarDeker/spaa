import { Component } from '@angular/core';
import { IAppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'sport-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public headerConfig:IAppInfo = {
    title: "HEADER",
    year: new Date().getFullYear()
  }
}
