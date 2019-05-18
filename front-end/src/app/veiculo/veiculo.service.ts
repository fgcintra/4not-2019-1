import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  // Injeção de dependência de uma instância
  // da classe HttpClient
  constructor(private http: HttpClient) { }

  novo(veiculo: any) {
    return this.http.post('http://localhost:3000/veiculo', veiculo);
  }

  listar() {
    return this.http.get('http://localhost:3000/veiculo');
  }

  obterUm(id: string) {
    return this.http.get(`http://localhost:3000/veiculo/${id}`);
  }

  atualizar(veiculo: any) {
    return this.http.patch('http://localhost:3000/veiculo', veiculo);
  }

  excluir(id: string) {
    return this.http.delete(`http://localhost:3000/veiculo/${id}`);
  }

}
