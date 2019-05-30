import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';

const routes: Routes = [
  {
    path: 'marca',
    component: MarcaListComponent
  },
  // A rota /novo de uma entidade deve vir ANTES
  // da rota /:id da mesma entidade
  {
    path: 'marca/novo',
    component: MarcaFormComponent
  },
  {
    path: 'marca/:id',
    component: MarcaFormComponent
  },
  {
    path: 'veiculo',
    component: VeiculoListComponent
  },
  {
    path: 'veiculo/novo',
    component: VeiculoFormComponent
  },
  {
    path: 'veiculo/:id',
    component: VeiculoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
