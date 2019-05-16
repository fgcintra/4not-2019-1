import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.scss']
})
export class MarcaFormComponent implements OnInit {

  titulo = 'Nova marca';
  marca: any = {}; // Objeto vazio

  constructor(
    private marcaSrv: MarcaService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar marca';
      // Buscando no back-end a marca correspondente ao id
      try {
        this.marca = await this.marcaSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.marca._id) { // Tem _id; atualizar
        await this.marcaSrv.atualizar(this.marca).toPromise();
        this.snackBar.open('Marca atualizada com sucesso', 'Entendi',
          {duration: 3000});
      } else {
        await this.marcaSrv.novo(this.marca).toPromise();
        this.snackBar.open('Marca criada com sucesso', 'Entendi',
          {duration: 3000});
      }
      this.router.navigate(['marca']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['marca']);
  }

}
