import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoServiceService } from 'src/app/model/produto-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';






@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  produtoForm!:FormGroup;
  dados:Produto={
    id:'',
    nome:'',
    preco:'',
    tipo:''

  }

  constructor (
    private route: ActivatedRoute,
    private service: ProdutoServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit():void{
    this.inicializaForm();

    const id=this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getProd(id).subscribe(
        (response:Produto)=>{
          this.dados=response;
        }
      )
      
    }
  }
  inicializaForm(){
    this.produtoForm=this.formBuilder.group({
      nome:['', Validators.required],
      preco:['', Validators.required],
      tipo:['', Validators.required],
    })
  }
  
  atualizarDados(){
    this.service.update(this.dados, this.dados.id).subscribe(
      (response:any)=>{
        console.log('Ddados atualizado com sucesso', response);
        alert('Produto atualizado com sucesso')
        this.router.navigate(['/']);
      },
      (error:any)=>{
        console.log('Erro ao atualizar', error);
      }
    )
  }

}
