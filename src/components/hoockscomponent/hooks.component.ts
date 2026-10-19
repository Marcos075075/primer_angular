import { Component } from "@angular/core";

@Component({
    selector: "hooks-component",
    standalone: false,
    templateUrl: "./hooks.component.html"
})

export class HooksComponent{
    public mensaje: string;
    constructor() {
        console.log("Constructor: Primer metodo del component");
        this.mensaje = "Hoy es lunes... yu-ju"
        
    }

    ngOnInit(): void{
        console.log("OnInit: Me ejecuto despues del constructor");
    }

    ngDoCheck(): void{
        console.log("DoCheck: Me ejecuto al cambiar el render");
    }

    cambiarMensaje(): void {
        this.mensaje = "Y mañana es martes... yu-pi"
    }
}