import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{


  constructor(
    private router : Router
  ) {
  }

  ngOnInit(): void {
    if(localStorage.getItem("isConnected") == "false" || localStorage.getItem("isConnected") == null){
      this.router.navigateByUrl('/login');
    }
  }
  handleLogoutRedirection($event: MouseEvent) {
    if(window.confirm('You are about to be redirected to the Home page.'))
    {
      window.location.href = 'http://localhost:4200';
    }
  }
}
