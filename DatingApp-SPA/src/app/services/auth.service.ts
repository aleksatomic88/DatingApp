import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

  jwtHelper = new JwtHelperService();

  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
      return this.http
        .post(this.baseUrl + 'login', model)
        .pipe(
          map((response: any)  => {
            if (response) {
                this.decodedToken = this.jwtHelper.decodeToken(response.token);
                localStorage.setItem('token', response.token);
            }
          })
      );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const myRawToken = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(myRawToken);
  }

  populateToken(){
    const myRawToken = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(myRawToken);
    console.log('Decoded Token: ', this.decodedToken);
  }
}
