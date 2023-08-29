import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ProdutoServiceService } from 'src/app/model/produto-service.service';
import { Produto } from 'src/app/model/produto';

import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent {

  dados:Produto={
    id:'',
    nome:'',
    preco:'',
    tipo:''
  };

  constructor (private service: ProdutoServiceService,
    private router: Router){}

    submitForm (form:NgForm){
      const produto = form.value;
      this.service.adicionarProduto(produto).subscribe(
        (response:any)=>{
          console.log('Produto cadastrado com sucesso', response);
          alert ('Novo produto registrado');
          this.router.navigate(['produtos']);
        },
        (error:any)=>{
          console.log('Erro ao inserir', error);
        }
      )
    }

}
