import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/colors/default.css',
    '../assets/css/vendor/flaticons/flaticon.min.css' 
  ]
})
export class AppComponent {
  me = 'Gabriel Lucena Toro';
  title = 'FullStack Developer';
}
