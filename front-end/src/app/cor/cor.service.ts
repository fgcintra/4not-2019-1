import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(cor: any) {
    return this.http.post('http://localhost:3000/cor', cor);
  }

  listar() {
    return this.http.get('http://localhost:3000/cor');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/cor/${id}`);
  }

  atualizar(cor: any) {
    return this.http.patch('http://localhost:3000/cor', cor);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/cor/${id}`);
  }

}
