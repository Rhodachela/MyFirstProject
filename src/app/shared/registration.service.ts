import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api_url = "https://localhost:44339/api"

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) {}

  registrationUser(registrationBody: any): Observable<any>{
    return this.httpClient.post<any>(api_url + '/User', registrationBody)
  }
}
