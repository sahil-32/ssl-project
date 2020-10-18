import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {
  private getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  private postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  constructor(private http: HttpClient) { }

  getdata(): Observable<User>{
    return this.http.get<User>(this.getUrl);
  }
  postdata(data:User){
    return this.http.post<any>(this.postUrl , data)
  }
}
