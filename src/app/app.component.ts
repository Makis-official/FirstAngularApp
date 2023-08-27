import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';

  persons = [
    {
      name: "Vlad",
      age: 24,
      gender: "male"
    },
    {
      name: "Kolya",
      age: 35,
      gender: "male"
    },
    {
      name: "Masha",
      age: 27,
      gender: "female"
    },
    {
      name: "Nikita",
      age: 42,
      gender: "male"
    }

    

  ];
  
  date_now = new Date();
}
