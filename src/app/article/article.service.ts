import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {Article} from "./Article";
import {ArticleDto} from "./ArticleDto";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http:HttpClient) {

  }

  getArticle(id : number){
    return this.http.get<Article>(AppComponent.baseUri+"/Article/"+id);
  }

  getArticles() {
    return this.http.get<Article[]>(AppComponent.baseUri+"/articles");
  }

  addArticle(articleDto : ArticleDto) {
    try {
      return this.http.post<ArticleDto>(AppComponent.baseUri + "/Article/add", JSON.stringify(articleDto), this.httpOptions)
        .subscribe(data => {
          console.log(data);
        });
    }
    catch (e) {
      console.log(e);
      return e;
    }
  }

  getCategories() {
    return this.http.get<string[]>(AppComponent.baseUri+"/Article/article-categories");
  }
}
