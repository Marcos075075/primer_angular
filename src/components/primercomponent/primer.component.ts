import { Component } from "@angular/core";

@Component({
    selector: "primer-component",
    standalone: false,
    template:`<h1>Soy un component nuevo en angular!!! </h1>
                <h3 style="color:blue">{{nombre}}</h3>  
                <h3 style="color:fuchsia">{{year}}</h3>
            `  
})

export class PrimerComponent{
    public nombre: string;
    public year: number;

    constructor(){
        this.nombre = "Alumno";
        this.year = 2026;
    }
}