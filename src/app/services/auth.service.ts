import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials";
import { Observable, catchError } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  authenticate(creds: Credentials) {
    console.log(creds);

    // const httpOptions = {
    //     headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    // })};

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, creds, {
      headers,
      observe: "response",
    });
  }

  successFullLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');


    if (token != null) {
      console.log(this.jwtService.isTokenExpired(token))
      return !this.jwtService.isTokenExpired(token);
      
    }

    return false;
  }

  logout(){
    localStorage.clear();
  }
}
