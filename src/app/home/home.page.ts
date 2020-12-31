import { Component } from '@angular/core';
import { NewsService } from '../news/news.service';
import { News } from '../models/News';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titlePrimary: string = 'Listado de las últimas 15 noticias';
  news: News[] = [];

  constructor(private newsService: NewsService) {
    this.loadLastNews();
  }

  loadLastNews() {
    this.newsService.getLastNews().subscribe((data: News[]) => {
      this.news = data;
    },(error) => {
      console.log("Error al obtener las noticias");
    });
  }
}
