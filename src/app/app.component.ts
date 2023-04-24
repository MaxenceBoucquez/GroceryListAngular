import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'exerciceazurefront';
  static baseUri : string = 'https://grocerylistazureapi.azure-api.net';
  static subscriptionKey : string = 'b3d9b1b0c3e84b8e8b1b1b0c3e88b8e8';
}
