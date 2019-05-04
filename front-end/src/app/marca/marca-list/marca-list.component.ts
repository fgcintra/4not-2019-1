import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.scss']
})
export class MarcaListComponent implements OnInit {

  public marcas: any = [];
  public displayedColumns: string[] = ['nome'];

  // Injeção do serviço no construtor
  constructor(private marcaSrv: MarcaService) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.marcas = await this.marcaSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

}
