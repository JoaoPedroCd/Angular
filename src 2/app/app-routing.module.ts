import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { AuthguardService } from './model/authguard.service';

const routes: Routes = [

{path:'',component:HomeComponent,canActivate:[AuthguardService]},
{path:'login',component:LoginComponent},
{path:'Cadastro',component:CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
