import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = 'http://localhost:3000/users/register';
  private signInUrl = 'http://localhost:3000/users/authenticate';
  private profileURL = 'http://localhost:3000/users/profile';
  
   user:any;
   authToken:any;
   available:boolean;
  constructor(private http: HttpClient) { }


/** POST: add a new hero to the database */

 signUp(user): Observable<string> {
   
    return this.http.post<string>(this.signupUrl,user, httpOptions);
  }

  authenticateUser(user):Observable<any> {
    
    return this.http.post<string>(this.signInUrl, user, httpOptions);
  }

  StoreUserData(token,user){
    localStorage.setItem('id_token',token);
   
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }


  getProfile():Observable<any>{
    this.loadToken();
    httpOptions.headers = httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get(this.profileURL, httpOptions);

  }

  loggedIn(){
    return !!localStorage.getItem('id_token');
  }


  loadToken(){
   const token = localStorage.getItem('id_token');
    this.authToken=token;
    
  }


  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }

}

