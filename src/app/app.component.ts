import { Component } from '@angular/core';
import { Notify } from 'notiflix';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';


  school(type: string){
    switch(type){
      case 'success':
        Notify.success('Вы успешно записаны в группу!');
        break;
  } };

  alert(type: string){
    switch(type){
      case 'success':
        Notify.success('success alert');
        break;

      case 'click-success':
        Notify.success('Нажмите, чтобы узнать подробности', ()=> {alert('Testing click alert');});
        break;
      
      case 'failure':
        Notify.failure('failure alert');
        break;

      case 'warning':
        Notify.warning('warning alert');
        break;
          
      case 'info':
        Notify.info('info alert');
        break;
      
    }
  }
}
