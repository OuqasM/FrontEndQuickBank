import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data: { username : string, password : string}):Observable<LoginResponse>{
    return this.http.post<LoginResponse>("http://127.0.0.1:8080/login",data);
  }

}
