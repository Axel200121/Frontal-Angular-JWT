import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleModel } from '@core/models/articles.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private url = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }


  public getAllArticles():Observable<any>{
    return this.http.get(`${this.url}/articles/find-all`)
  }
}
