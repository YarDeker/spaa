import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { SportList } from "./features/products/sport-list/sport-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, SportList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa');
}
