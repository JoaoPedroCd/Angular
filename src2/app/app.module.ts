import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { CadastroLogComponent } from './page/cadastro-log/cadastro-log.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
import { CadastrarProdComponent } from './page/cadastrar-prod/cadastrar-prod.component';
import {AngularFireModule} from '@angular/fire/compat';
import { configuracao2 } from './configuracao2';
import { NavComponent } from './page/nav/nav.component';
import { FooterComponent } from './page/footer/footer.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroLogComponent,
    ProdutosComponent,
    CadastrarProdComponent,
    NavComponent,
    FooterComponent,
    NovoProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(configuracao2),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
