import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(tipo: any) {
    return this.http.post('http://localhost:3000/tipo', tipo);
  }

  listar() {
    return this.http.get('http://localhost:3000/tipo');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/tipo/${id}`);
  }

  atualizar(tipo: any) {
    return this.http.patch('http://localhost:3000/tipo', tipo);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/tipo/${id}`);
  }

}
