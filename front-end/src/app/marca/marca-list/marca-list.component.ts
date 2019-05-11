import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss']
})
export class MarcaListComponent implements OnInit {

  public marcas: any = [];
  public displayedColumns: string[] = ['nome', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private marcaSrv: MarcaService,
    private snackBar: MatSnackBar
  ) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.marcas = await this.marcaSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir esta marca? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.marcaSrv.excluir(id).toPromise();
        this.snackBar.open('Marca excluída com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}
