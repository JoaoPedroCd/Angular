import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { ProdutoComponent } from './page/produto/produto.component';

const routes: Routes = [
  {path:'',component:ProdutoComponent},
  {path:'novo',component:NovoProdutoComponent},
  {path:'atualizar/:id', component:AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
