import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http:HttpClient) { }

  getUser(username : string) {
      return this.http.get<User>(AppComponent.baseUri +"/User/"+username);
  }

  addUser(username : string, firstName : string, lastName : string, email : string, password : string) {
    try {
      return this.http.post<User>(AppComponent.baseUri+"/User/new", JSON.stringify({username, firstName, lastName, email, password}), this.httpOptions);
    }
    catch (e) {
      console.log(e);
      return e;
    }
  }


  deleteUser(username: string):void {
    const options = {
      params : new HttpParams().set('username', username)
    }
    this.http.delete(AppComponent.baseUri+`/User/`, options).subscribe( data => {
      console.log(data);
    });
  }
}
