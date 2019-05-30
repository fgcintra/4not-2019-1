import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';
import { ModeloService } from '../../modelo/modelo.service';
import { CorService } from '../../cor/cor.service';
import { CombustivelService } from '../../combustivel/combustivel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent implements OnInit {

  titulo = 'Novo veículo';

  veiculo: any = {}; // Objeto vazio

  modelos: any = []; // Vetor vazio
  cores: any = [];
  combustiveis: any = [];
  anos: any = [];

  anoAtual = new Date().getFullYear();

  constructor(
    private veiculoSrv: VeiculoService,
    private modeloSrv: ModeloService,
    private corSrv: CorService,
    private combustivelSrv: CombustivelService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar veículo';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.veiculo = await this.veiculoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.carregarListas();
  }

  async carregarListas() {
    try {
      this.modelos = await this.modeloSrv.listar().toPromise();
      this.cores = await this.corSrv.listar().toPromise();
      this.combustiveis = await this.combustivelSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }

    // Carregar vetor de anos
    for (let i = this.anoAtual; i >= 1950; i--) {
      this.anos.push({ano: i});
    }
    console.log(this.anos);
  }

  async salvar() {
    try {
      if (this.veiculo._id) { // Tem _id; atualizar
        await this.veiculoSrv.atualizar(this.veiculo).toPromise();
        this.snackBar.open('Veículo atualizado com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.veiculoSrv.novo(this.veiculo).toPromise();
        this.snackBar.open('Veículo atualizado com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['veiculo']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['veiculo']);
  }

}
