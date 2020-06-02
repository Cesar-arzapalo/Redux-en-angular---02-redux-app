import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { HijoComponent } from './contador/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    NietoComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
