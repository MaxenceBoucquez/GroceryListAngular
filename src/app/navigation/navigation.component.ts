import { Component } from '@angular/core';
import {NavigationCancel} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor() { }

  protected readonly localStorage = localStorage;

  handleLogout($event : MouseEvent) {
    localStorage.removeItem("email");
    localStorage.clear();
    localStorage.setItem("isConnected", "false");
  }
}
