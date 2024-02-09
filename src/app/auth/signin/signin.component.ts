import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  formData:any={};
constructor(){}

ngOnInit(){
console.log("ngOnInit")
}
loing(){
  console.log("test");
  console.log(this.formData);
}
}
