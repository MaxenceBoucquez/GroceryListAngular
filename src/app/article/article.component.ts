import {Component, Input} from '@angular/core';
import {Article} from "./Article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  test:string = "test";
  @Input() article: Article | undefined;
  constructor() {
  }


}
