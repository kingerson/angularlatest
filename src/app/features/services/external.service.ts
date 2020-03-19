import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTest, PostTest } from '../models/external-model';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  private POST_ENDPOINT: string = "https://jsonplaceholder.typicode.com";

  getUser(userId: number): Observable<UserTest> {
    return this.httpClient.get<UserTest>(`${this.POST_ENDPOINT}/todos/${userId}`);
  }

  getListPost(): Observable<PostTest[]> {
    return this.httpClient.get<PostTest[]>(`${this.POST_ENDPOINT}/posts`);
  }

  postCreate(model : PostTest): Observable<PostTest> {
    return this.httpClient.post<PostTest>(`${this.POST_ENDPOINT}/posts`, model);
  }

  updateUser(userId : number, model : PostTest): Observable<PostTest> {
    return this.httpClient.put<PostTest>(`${this.POST_ENDPOINT}/posts/${userId}`, model);
  }

  deleteUser(userId: number): Observable<UserTest> {
    return this.httpClient.delete<UserTest>(`${this.POST_ENDPOINT}/posts/${userId}`);
  }

  filterUser(parameters: any): Observable<UserTest> {
    let httpParams = new HttpParams({
      fromObject: parameters
    });
    return this.httpClient.get<UserTest>(`${this.POST_ENDPOINT}/posts/`, { params: httpParams });
  }

}
