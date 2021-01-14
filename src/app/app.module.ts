import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { LeftComponent } from './left/left.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    PageBodyComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
