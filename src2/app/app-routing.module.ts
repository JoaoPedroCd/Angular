import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AuthguadService } from './model/authguad.service';
import { LoginComponent } from './page/login/login.component';
import { CadastrarProdComponent } from './page/cadastrar-prod/cadastrar-prod.component';
import { CadastroLogComponent } from './page/cadastro-log/cadastro-log.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
const routes: Routes = [
{path:'',component:HomeComponent,canActivate:[AuthguadService]},
{path:'login',component:LoginComponent},
{path:'cadastro-log',component:CadastroLogComponent},
{path:'novo-produto',component:NovoProdutoComponent},
{path:'produtos',component:ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
