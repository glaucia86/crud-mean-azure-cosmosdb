import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  // ==> Uri da api (Back-End)
  uri = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por adicionar um novo 'Funcionario':
   */
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const funcionario = {
      nomeFuncionario,
      cargo,
      numeroIdentificador
    };
    console.log(funcionario);

     // ==> (POST - Url no Back-End): http://localhost:8000/api/funcionarios
    this
      .http
      .post(`${this.uri}/funcionarios`, funcionario)
      .subscribe(res => console.log('Feito'));
  }

  /**
   * Método responsável por selecionar todos os 'Funcionários'
   */
  getFuncionarios() {
    // ==> (GET - Url no Back-End): http://localhost:8000/api/funcionarios
    return this
      .http
      .get(`${this.uri}/funcionarios`);
  }
}

