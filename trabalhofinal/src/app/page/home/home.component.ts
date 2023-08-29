import { Component } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private service : FirebaseloginService , private router :Router ){}
logout(){
  this.service.logout();
  this.router.navigate(['/']);  
}
}
