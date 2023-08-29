import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoServiceService } from 'src/app/model/produto.service';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  produtos:Produto[]=[];

  constructor(private service:ProdutoServiceService){}

  ngOnInit():void{
    this.listarProdutos();

  }

  listarProdutos():void{
    this.service.getProduto().subscribe(
      produtos=>{
        this.produtos=produtos;
      },
      error=>{
        console.log(error);
      }
    )
  }

  deletar(id:any){
    this.service.excluir(id).subscribe(
      ()=>{
        console.log('Produto removido com sucesso')
      },
      (error)=>{
        console.log("Erro ao remover", error)
      }
    )
  }
}
