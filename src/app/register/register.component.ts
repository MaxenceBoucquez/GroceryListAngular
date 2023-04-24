import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  @Input() username : string = "";
  @Input() firstName : string = "";
  @Input() lastName : string = "";
  @Input() email : string = "";
  @Input() password : string = "";
  @Input() confirmPassword : string = "";

  isConnected: boolean = false;
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    username: new FormControl('')
  });
  constructor(
    public router: Router,
    private userService: UserService
  ){
  }

  ngOnInit(): void {
    if(localStorage.getItem("isConnected") == "true"){
      this.router.navigate(['/profile']);
    }
  }


  handleSubmit() : void {
    if(this.username == "" || this.firstName == "" || this.lastName == "" || this.email == "" || this.password == "" || this.confirmPassword == ""){
      window.alert("Please fill all the fields");
      return;
    }
    if(!this.checkMail(this.email))
    {
      window.alert("Please enter a valid email");
      return;
    }
    if(this.password != this.confirmPassword){
      window.alert("Passwords do not match");
      return;
    }
    if(this.userService.addUser(this.username, this.firstName, this.lastName, this.email, this.password) == null){
      if(window.confirm("You already have an account, do you want to log in?")){
        this.router.navigateByUrl('/login');
      }
      return;
    } else {
      localStorage.setItem("username", this.username);
      localStorage.setItem("firstName", this.firstName);
      localStorage.setItem("lastName", this.lastName);
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      localStorage.setItem("savedName", this.username);
      this.router.navigateByUrl('/login');
    }
  }

  private checkMail(email: string) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }


  handleNameChange($event: Event) {
    this.firstName = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get('name')?.setValue(this.firstName);
  }

  handleSurnameChange($event: Event) {
    this.lastName = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get('surname')?.setValue(this.lastName);
  }

  handleEmailChange($event: Event) {
    this.email = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get('email')?.setValue(this.email);
  }

  handlePasswordChange($event: Event) {
    this.password = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get("password")?.setValue(this.password);
  }

  handleConfirmPasswordChange($event: Event) {
    this.confirmPassword = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get("confirmPassword")?.setValue(this.confirmPassword);
  }

  handleUsernameChange($event: Event) {
    this.username = ($event.target as HTMLInputElement).value;
    this.checkoutForm.get("username")?.setValue(this.username);
  }
}
