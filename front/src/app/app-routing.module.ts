import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpGetComponent } from './emp-get/emp-get.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

// Aqui eu defino as rotas de cada componente criado:
const routes: Routes = [
  { path: 'funcionario/create', component: EmpAddComponent },
  { path: 'funcionario/edit/:id', component: EmpEditComponent },
  { path: 'funcionario', component: EmpGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
