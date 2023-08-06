import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ArticleModel } from '@core/models/articles.models';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public lisArticles: ArticleModel[]=[]
  constructor(
    private _articleServices: ArticlesService
  ){}
  ngOnInit(): void {
    this.getAllArticles()
  }

  private async getAllArticles(){
     await this._articleServices.getAllArticles().subscribe(responseOk=>{
      const { status, articles } = responseOk
      this.lisArticles = articles
      console.log(this.lisArticles);
  
    },
    error=>{
      console.log("Algo salio mal");
    })

  }

}
