import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})

export class EmpAddComponent implements OnInit {

  adicionarFuncionarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) {
    this.createForm();
  }

  // Método responsável por tratar as validações do Form que criará um novo Funcionário:
  createForm() {
    this.adicionarFuncionarioForm = this.formBuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  // Método responsável por adicionar um novo 'Funcionário':
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    this.funcionarioService.adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador);
  }

  ngOnInit() {
  }

}
