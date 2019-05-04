import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';

const routes: Routes = [
  {
    path: 'marca',
    component: MarcaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
