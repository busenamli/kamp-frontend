import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //html etiketi gibi yazmamızı sağlar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Buse Namlı';

}
