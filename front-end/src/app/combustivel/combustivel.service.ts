import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(combustivel: any) {
    return this.http.post('http://localhost:3000/combustivel', combustivel);
  }

  listar() {
    return this.http.get('http://localhost:3000/combustivel');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/combustivel/${id}`);
  }

  atualizar(combustivel: any) {
    return this.http.patch('http://localhost:3000/combustivel', combustivel);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/combustivel/${id}`);
  }

}
