import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CabecComponent } from './ui/cabec/cabec.component';
import { MenuPrincipalComponent } from './ui/menu-principal/menu-principal.component';
import { RodapeComponent } from './ui/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    MarcaListComponent,
    MarcaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
