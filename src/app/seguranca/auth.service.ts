import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  )
  { 
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http
      .post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.armazenarToken(response['access_token']);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  private armazenarToken(access_token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(access_token);
    localStorage.setItem('token', access_token);
  }

  private carregarToken() { 
    const token = localStorage.getItem('token');
    
    if (token) {
      this.armazenarToken(token);
    }
  }
}
