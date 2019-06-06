import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../modelo.service';
import { MarcaService } from '../../marca/marca.service';
import { TipoService } from '../../tipo/tipo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.scss']
})
export class ModeloFormComponent implements OnInit {

  titulo = 'Novo modelo';

  /* Campos booleanos requeridos precisam ser inicializados
    na declaração do objeto vazio
  */
  modelo: any = {}; // Objeto vazio

  marcas: any = []; // Vetor vazio
  tipos: any = [];

  constructor(
    private modeloSrv: ModeloService,
    private marcaSrv: MarcaService,
    private tipoSrv: TipoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar modelo';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.modelo = await this.modeloSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.carregarListas();
  }

  async carregarListas() {
    try {
      this.marcas = await this.marcaSrv.listar().toPromise();
      this.tipos = await this.tipoSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }

  }

  async salvar() {
    try {
      if (this.modelo._id) { // Tem _id; atualizar
        await this.modeloSrv.atualizar(this.modelo).toPromise();
        this.snackBar.open('Veículo atualizado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.modeloSrv.novo(this.modelo).toPromise();
        this.snackBar.open('Veículo atualizado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['modelo']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['modelo']);
  }

}
