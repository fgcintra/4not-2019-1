import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.scss']
})
export class VeiculoListComponent implements OnInit {

  public veiculos: any = [];
  public displayedColumns: string[] = ['marca', 'modelo', 'ano', 'cor', 'placa', 'preco_minimo', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private veiculoSrv: VeiculoService,
    private snackBar: MatSnackBar
  ) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.veiculos = await this.veiculoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este veículo? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.veiculoSrv.excluir(id).toPromise();
        this.snackBar.open('Veículo excluído com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}
