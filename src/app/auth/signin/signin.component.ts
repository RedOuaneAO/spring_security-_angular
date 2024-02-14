import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  formData:any={};
constructor(
  private loginService : AuthServiceService ,
  private router:Router ,
  ){}

ngOnInit(){
// console.log("ngOnInit")
}
loing(){
  console.log("test");
  this.loginService.authenticate(this.formData).subscribe((res)=>{
    localStorage.setItem("token" , res.token);
    console.log(res.token)
    this.router.navigate(['/dashboard'])
  },(error)=>{
    console.log(this.formData)
    console.log(error.error)
  })
  console.log(this.formData);
}
}
