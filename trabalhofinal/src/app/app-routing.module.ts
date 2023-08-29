import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AuthguadService } from './model/authguad.service';
import { LoginComponent } from './page/login/login.component';



import { CadastroLogComponent } from './page/cadastro-log/cadastro-log.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { ProdutoComponent } from './page/produto/produto.component';

const routes: Routes = [
{path:'',component:LoginComponent,canActivate:[AuthguadService]},
{path:'produto',component:ProdutoComponent},
{path:'cadastro-log',component:CadastroLogComponent},
{path:'novo',component:NovoProdutoComponent},
{path:'atualizar/:id',component:AtualizarProdutoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
