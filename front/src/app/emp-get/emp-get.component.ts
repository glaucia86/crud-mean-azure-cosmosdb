import { Component, OnInit } from '@angular/core';
import Funcionario from '../Funcionario';
import { FuncionarioService } from '../funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-get',
  templateUrl: './emp-get.component.html',
  styleUrls: ['./emp-get.component.css']
})
export class EmpGetComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[]) => {
        this.funcionarios = data;
      });
  }

}
