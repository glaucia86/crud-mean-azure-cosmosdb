import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AngularFontAwesomeModule  } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpGetComponent } from './emp-get/emp-get.component';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmpEditComponent,
    EmpGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
