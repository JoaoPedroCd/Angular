import { Component } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-log',
  templateUrl: './cadastro-log.component.html',
  styleUrls: ['./cadastro-log.component.css']
})
export class CadastroLogComponent {
email:string='';
senha:string='';
mensagem:string='';

constructor(private service : FirebaseloginService, private router :Router){}

registrar(){
  if (this.email && this.senha) {
    this.service.registro(this.email , this.senha).then(
      result =>{
        console.log('Usuario registrado com susexcsso', result.user);
        alert('cadastro realizado com sucesso');
        this.router.navigate(['/login']);
      }


    ).catch(
      error => {
        console.log('Erro ao tentar se cadastrar',error)
        this.mensagem = 'Erro ao tentan se cadastrar';
      }


    )
  
  }else{
    this.mensagem = 'por favor , preencha todos os campos';
  }
}



}
