import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../modelo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.scss']
})
export class ModeloListComponent implements OnInit {

  public modelos: any = [];
  public displayedColumns: string[] = ['nome', 'marca', 'tipo', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private modeloSrv: ModeloService,
    private snackBar: MatSnackBar
  ) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.modelos = await this.modeloSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este veículo? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.modeloSrv.excluir(id).toPromise();
        this.snackBar.open('Veículo excluído com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}
