import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './shared-component/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthenticationInterceptor } from './helpers/interceptors/auth/authentication.interceptor';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
