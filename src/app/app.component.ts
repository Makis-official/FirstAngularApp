import { Component } from '@angular/core';

import {Subscription, interval, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';

  intervalSub$!: Subscription;
  intervalRundSub$!: Subscription;

  counterMas: Number[] = [];
  randMas: String[] = [];

  enableStopButton = false;
  enableRandStopButton = false;

  constructor() {}

  enableInterval(){
    const intervalStreaming = interval(2000);

    this.intervalSub$ = intervalStreaming.subscribe((value) => {
      this.counterMas.push(Number(value));
      console.log(value);
    });


    this.intervalRundSub$ = intervalStreaming.pipe(map(() => `Random Value: ${Math.floor(Math.random() * (100)) + 1}`)).subscribe((value)=> {
      this.randMas.push(value);
      console.log(value);
    }
      );

    this.enableStopButton = true;
    this.enableRandStopButton = true;
  };


    stopSubs() {
    this.intervalSub$.unsubscribe();
    this.enableStopButton = false;
  };

  stopRandSubs() {
    this.intervalRundSub$.unsubscribe();
    this.enableRandStopButton = false;
  };
}
