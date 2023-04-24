import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {LogoutComponent} from "./logout/logout.component";
import {AddArticleComponent} from "./add-article/add-article.component";


let routes: Routes;
routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'add-article', component: AddArticleComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
