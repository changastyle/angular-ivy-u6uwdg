import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  edad = 18;

  arrProds = [
    { id: 1, nombre: 'Pancho', precio: 250 },
    { id: 2, nombre: 'Salchicha', precio: 50 },
    { id: 3, nombre: 'Burger', precio: 500 },
  ];
}
