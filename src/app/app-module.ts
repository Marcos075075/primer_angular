import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hoockscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FromsBindingComponent } from '../components/formularioscomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumarnumeros.component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { TablaMultiplicarBindingComponent } from '../components/tabla-multiplicar-binding-component/tabla-multiplicar-binding-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FromsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
    TablaMultiplicarBindingComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
