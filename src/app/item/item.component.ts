import { Component} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  Persons = [
    {
      name: "Ruslan",
      id: 1,
      city: "Moskow"
    },
    {
      name: "Maksim",
      id: 2,
      city: "Moskow"
    },
    {
      name: "Andrey",
      id: 3,
      city: "Moskow"
    }
  ]

}
