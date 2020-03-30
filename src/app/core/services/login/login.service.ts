import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private POST_ENDPOINT = environment.auth.url;
  private CLIENT_ID = environment.auth.client_id;
  private GRANT_TYPE = environment.auth.grand_type;
  private CLIENT_SECRET = environment.auth.client_secret;
  private RESOURCE = environment.auth.resource;

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      })
    };

    return this.httpClient.post<any>(`${this.POST_ENDPOINT}`,
      `client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}&resource=${this.RESOURCE}&grant_type=${this.GRANT_TYPE}&username=${username}&password=${password}`,
      httpOptions);
  }



}
