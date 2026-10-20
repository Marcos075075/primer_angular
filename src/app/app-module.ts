import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hoockscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FromsBindingComponent } from '../components/formularioscomponent/forms.binding.component';

@NgModule({
  declarations: [
    App, PrimerComponent, HooksComponent, DeportesComponent, FromsBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
