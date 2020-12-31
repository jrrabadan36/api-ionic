import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = 'https://www.circuitricardotormo.com/wp-json/wp/v2';

  constructor(private httpClient: HttpClient) { }

  getLastNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.url+`/posts?page=1&per_page=15&_embed`);
  }

  getLastNew(id: number): Observable<News> {
    return this.httpClient.get<News>(this.url+`/posts/`+id+`?_embedbed`);
  }
}
