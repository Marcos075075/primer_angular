import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-binding-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-binding-component.css',
  templateUrl: './tabla-multiplicar-binding-component.html',
})
export class TablaMultiplicarBindingComponent {
  public num!: number;
  public multiplica: Array<number>;

  constructor(){
    this.multiplica= [];
  }

  multiplicar(): void {
    let aux = 0
    for (let i = 0; i <= 10; i++) {
      aux = i * this.num;
      this.multiplica.push(aux);
    }

  }
}
