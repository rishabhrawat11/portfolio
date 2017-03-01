import {Component, trigger, state, style} from '@angular/core';
import {EasingLogic} from "ng2-page-scroll";



@Component({
    selector:'my-home',
    templateUrl:'./home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {

  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
      // easeInOutExpo easing
      if (t === 0) return b;
      if (t === d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

}
