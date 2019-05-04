import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  // Injetando a dependência HttpClient
  // no parâmetro do construtor
  constructor(private http: HttpClient) { }

  novo(marca: any) {
    return this.http.post('http://localhost:3000/marca', marca);
  }

  listar() {
    return this.http.get('http://localhost:3000/marca');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/marca/${id}`);
  }

  atualizar(marca: any) {
    return this.http.patch('http://localhost:3000/marca', marca);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/marca/${id}`);
  }

}
