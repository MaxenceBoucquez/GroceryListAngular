import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'exerciceazurefront';
  static baseUri : string = 'https://grocerylistazureapi.azure-api.net';
}
