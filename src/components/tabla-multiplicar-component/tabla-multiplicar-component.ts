import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  public multiplica: Array<number>;
  @ViewChild("cajamultiplicar") cajaMultiplicar!: ElementRef;

  constructor() {
    this.multiplica = []
  }

  multiplicaNumeros(): void {
    let num = this.cajaMultiplicar.nativeElement.value;
    let aux = []
    for (let i = 0; i <= 10; i++) {
      aux.push(parseInt(num) * i);   
    }
      this.multiplica = aux;

  }

}
