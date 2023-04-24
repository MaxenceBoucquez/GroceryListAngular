import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {UserService} from "../user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  profilForm: FormGroup= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  savedName : string = "";
  username : string = "";
  constructor(
    private router : Router,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("isConnected") == "true"){
      this.router.navigate(['/profile']);
    }
    console.log(localStorage.getItem("savedName"));
  }

  handleSubmit($event: SubmitEvent) : void {
    $event.preventDefault();
    this.username = this.profilForm.controls['username'].value;
    if(this.username == "" || this.profilForm.controls['password'].value == ""){
      window.alert("Please fill all the fields");
      return;
    }
    try {
      this.userService.getUser(this.username)
    }
    catch (e)
     {
       window.alert("This username is not registered in the database. Do you want to register with it?")
        if(window.confirm("This username is not registered in the database. Do you want to register with it?")){
          this.router.navigate(['/register']);
        }
        return;
      }
    try {
      this.userService.getUser(this.username).subscribe(user => {
        if(user.password != this.profilForm.controls['password'].value){
          window.alert("Wrong password");
          return;
        } else {
          localStorage.setItem("username", user.userName);
          localStorage.setItem("firstName", user.firstName);
          localStorage.setItem("lastName", user.lastName);
          localStorage.setItem("email", user.email);
          localStorage.setItem("password", user.password);
          localStorage.setItem("isConnected", "true");
          localStorage.setItem("isConnected", "true");
          this.router.navigate(['/profile']);
        }
      });
    }
    catch (e) {
      window.alert("Wrong username");
      return;
    }
  }


  handleUsernameChange($event: Event) {
    this.profilForm.controls['username'].setValue(($event.target as HTMLInputElement).value);
  }

  handlePasswordChange($event: Event) {
    // @ts-ignore
    this.profilForm.controls['password'].setValue(($event.target as HTMLInputElement).value);
  }

  addName() {
  }

  protected readonly localStorage = localStorage;
  protected readonly name = name;

  handleNotificationClose($event: MouseEvent) {
    // @ts-ignore
    $event.target.parentNode.parentNode.parentNode.classList.add('hidden');
  }
}
