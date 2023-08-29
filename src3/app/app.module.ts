import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './page/produto/produto.component';

import { HttpClientModule } from '@angular/common/http';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    AtualizarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
