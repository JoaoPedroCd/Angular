import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/model/produto.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent {
dados:Produto = {
  id:'',
  nomeProd:'',
  valorProd:'',
  quantidadeProd:'',
  validadeProd:'',
}
constructor(private service : ProdutoService , private router: Router){}

submit(from:NgForm){
const produto = from.value;
this.service.adicionarProduto(produto).subscribe(
  (response :any)=>{
  console.log('Produto Cadastrado com sucesso',response);
  alert('novo produto cadastrado');
  this.router.navigate(['/']);
  },
  (error:any)=>{
    console.log('erro ao inserir o produto',error)
  }
)



}



}
