import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {
  uri = '/funcionario';

  constructor(private http: HttpClient) { }

  // Método responsável por adicionar um novo funcionario:
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const funcionario = {
      nomeFuncionario: nomeFuncionario,
      cargo: cargo,
      numeroIdentificador: numeroIdentificador
    };

    console.log(funcionario);
    this.http.post(`${this.uri}/add`, funcionario)
      .subscribe(res => console.log('Feito'));
  }
}

