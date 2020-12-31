import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../../models/News';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  titlePrimary: string = 'Detalle de la noticia';
  new: News;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showDetails();
  }

  showDetails() {
    this.activatedRoute.paramMap.subscribe((param)=>{
      //console.log(param.get('id'));
      this.newsService.getLastNew(parseInt(param.get('id'))).subscribe((data: News)=>{
        console.log(data);
        this.new = data;
      },(error)=>{
        console.log(error);
      });
    });
  }
}
