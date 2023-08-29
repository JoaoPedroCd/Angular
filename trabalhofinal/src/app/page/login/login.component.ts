import { Component } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/token';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email : string='';
  senha : string='';
  mensagem :string='';
  constructor(private service : FirebaseloginService , private router:Router ,private tokenService:TokenService  ){}

  login(){
    if(this.email && this.senha){
      this.service.login(this.email,this.senha).then(
       
        result=>{
          console.log('usuario logado',result.user);
          this.tokenService.enviarToken(this.email);
          this.router.navigate(['produto']);
        }
      ).catch(
        error =>{
          console.log('erro ao fazer login',error);
          this.mensagem='erro ao fazer login. verifique suas credenciais';

        }
      )
    }else{
      this.mensagem='Preencha todos os campos'
    }
  }



}
