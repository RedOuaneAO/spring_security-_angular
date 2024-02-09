import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http :HttpClient) { }

  authenticate(userData:any):Observable<any>{
      return this.http.post(environment.apiURL+'auth/authenticate',userData);
  }
  getUserDetails():Observable<any>{
    return this.http.get(environment.apiURL+'userDetails');
  }

}
