import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
        public numeros: Array<number>;
        public sports: Array<string>;
        constructor(){
            this.numeros = [10, 22, 37, 42, 56, 65];
            this.sports = ["Peonza", "Futbol", "Badminton", "Curling"]
        }
}