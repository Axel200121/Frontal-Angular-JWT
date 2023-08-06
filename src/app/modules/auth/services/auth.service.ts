import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  public sendCredentials(email:string, password:string):Observable<any>{
    console.log("credenciales", email,password)
    const body={
      email,
      password
    }
    return this.http.post(`${this.url}/auth/login`,body)
  }
}
