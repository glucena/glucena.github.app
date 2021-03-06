import { Component } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { ActivatedRoute, Router } from '@angular/router';
import {LocationStrategy} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/vendor/flaticons/flaticon.min.css' 
  ]
})
export class AppComponent {
  me = 'Gabriel Lucena Toro';
  title = 'FullStack Developer';

  constructor(
    config: NgsRevealConfig,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // customize default values of ng-scrollreveal directives used by this component tree
    config.duration = 1000;
    //config.rotate = { x: 10, y: 90, z: 0 };
    config.easing = 'cubic-bezier(0.800, 0.300, 0.300, 0.800)';

    //other options here
  }

  isHidden () {
    return this.router.url === '/detailed-cv';
  }
}
