import { Component } from '@angular/core';
import { ResponseService } from './service/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstAngularApp';

  constructor(public RespServ: ResponseService) {}

}
