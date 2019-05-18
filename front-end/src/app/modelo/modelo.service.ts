import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(modelo: any) {
    return this.http.post('http://localhost:3000/modelo', modelo);
  }

  listar() {
    return this.http.get('http://localhost:3000/modelo');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/modelo/${id}`);
  }

  atualizar(modelo: any) {
    return this.http.patch('http://localhost:3000/modelo', modelo);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/modelo/${id}`);
  }

}
