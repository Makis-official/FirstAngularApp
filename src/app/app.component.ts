import { Component } from '@angular/core';

interface Books {
  name_book: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  books: Books[] = [
    {
      name_book: 'Идиот',
      author: 'Достоевский'
    },
    {
      name_book: "Щоколад",
      author: "Харрис"
    },
    {
      name_book: "Ревиззор",
      author: "Гоголь"
    }
  ];

  create_Books = {
    name_book: null,
    author: null,
  }

  addBook() {
    this.books.push({
      name_book: this.create_Books.name_book,
      author: this.create_Books.author
    });
  }

}
