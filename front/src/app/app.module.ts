import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpGetComponent } from './emp-get/emp-get.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmpEditComponent,
    EmpGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
