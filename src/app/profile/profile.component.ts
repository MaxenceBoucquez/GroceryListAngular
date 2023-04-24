import {Component, HostListener, NgIterable, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from "../article/article.service";
import {Article} from "../article/Article";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public articles : Array<Article> = new Array<Article>();
  @ViewChild('table') table: HTMLTableElement | undefined;

  async ngOnInit() {
    if(localStorage.getItem('isConnected') == 'false' || localStorage.getItem('isConnected') == null)
    {
      this.router.navigateByUrl('/login');
    }
    await this.articleService.getArticles().forEach(value => value.forEach(article => this.articles.push(article)));
    if (localStorage.getItem('password') != undefined) {
        this.hashPassword()
    } else {
      // @ts-ignore
      localStorage.removeItem("hashedPassword")
    }
  }

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private userService: UserService
  ) {
  }

  protected readonly localStorage = localStorage;

  handleDelete($event: MouseEvent) {
    if(window.confirm('Are you sure you want to delete your account?'))
    {
      console.log(localStorage.getItem("username"));
      // @ts-ignore
      this.userService.deleteUser(localStorage.getItem("username"));
      localStorage.removeItem('firstName');
      localStorage.removeItem('userName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('surname');
      localStorage.setItem('isConnected', 'false');
      window.location.href = '/register';
    }
  }

  hashPassword() : void {
    let s = localStorage.getItem('password');
    let h : number = 0;
    if(s!=undefined)
    {
      for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;

      localStorage.setItem('hashedPassword',h.toString());
    }
  }

  handleListClick(event:any) {
    let hiddenDiv = document.querySelectorAll('.article-information');
    hiddenDiv.forEach(value => {
      if(!value.classList.contains("hidden"))value.classList.add('hidden')
    });
    event.target.firstChild.classList.remove('hidden');
  }

  handleAddArticle() {
    this.router.navigateByUrl('/add-article');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    var width:number = window.innerWidth;
    this.table ? this.table.width : width.toString();
  }
}

