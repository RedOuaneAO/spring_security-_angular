import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

constructor(private authService : AuthServiceService,
  private router:Router){}


  logout(){
    this.authService.logout();
    this.router.navigate(['/signin'])
  }
}
