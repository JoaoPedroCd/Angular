import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/model/produto.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
produtos : Produto[]=[];
constructor(private service : ProdutoService){}
ngOnInit(): void {
  
}
listarProdutos(): void{
  this.service.getProduto().subscribe(
    produtos =>{
      this.produtos=produtos;
    },
    error=>{
      console.log(error)
    }
  )

}
}
