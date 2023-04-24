import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../article/article.service";
import {Router} from "@angular/router";
import {ArticleDto} from "../article/ArticleDto";


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    quantity: new FormControl('')
  });

  articleDto: ArticleDto | undefined;
  constructor(
    private articleService : ArticleService,
    private router: Router
  ) {
  }

  handleSubmit() {
    if (this.checkoutForm.value.name === '' || this.checkoutForm.value.price === '' || this.checkoutForm.value.category === '') {
      window.alert('Please fill all the fields');
      return;
    }
    if(this.verifyPrice())
    {
      try {
        this.articleDto = new ArticleDto(this.checkoutForm.value.category, this.checkoutForm.value.name, this.checkoutForm.value.price );
        this.articleService.addArticle(this.articleDto);
        window.alert('Article added successfully');
        this.router.navigateByUrl('/profile').then(r =>{});
      }
      catch (e) {
        window.alert('Error adding article');
      }
    }
 }

  handleNameChange($event: Event) {
    this.checkoutForm.get('name')?.setValue(($event.target as HTMLInputElement).value);
  }

  handlePriceChange($event: Event) {
    this.checkoutForm.get('price')?.setValue(($event.target as HTMLInputElement).value);
  }

  handleCategoryChange($event: Event) {
    this.checkoutForm.get('category')?.setValue(($event.target as HTMLInputElement).value);
  }


  verifyPrice() {
    if(this.checkoutForm.value.price < 0) {
      window.alert('Price must be positive');
      return false;
    } else if(isNaN(parseInt(this.checkoutForm.value.price))) {
      window.alert('Price must be a number');
      return false;
    }
    return true;
  }
}
