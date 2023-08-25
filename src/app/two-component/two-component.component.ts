import { Component } from '@angular/core';

@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css']
})
export class TwoComponentComponent {

  result = 0;

  schetchik() {
    this.result++;
  }

}
