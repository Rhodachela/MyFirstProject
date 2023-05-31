import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api_url = "https://localhost:44339/api"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  loginUser(loginBody: any): Observable<any>{
    return this.httpClient.post<any>(api_url + 'Login', loginBody)
  }
}
