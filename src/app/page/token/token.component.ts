import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/model/token';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent  {
  usuario:string='';
token:Token | null=null;


constructor(private tokenService:TokenService){}

// ngOnInit():void{
// this.listarToken();
// }


gerarToken(){
  this.token=this.tokenService.gerarToken(this.usuario);
  this.tokenService.adicionarToken(this.token).subscribe((response)=>{console.log('token adicionado')})
}


}
