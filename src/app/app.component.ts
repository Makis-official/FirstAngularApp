import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { todoState } from 'src/store/todo.state';
import { TodoModel } from 'src/store/model/auth.model';

import { AddTodo, DeleteTodo, Completed } from 'src/store/model/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirstAngularApp';

  constructor(private store: Store) {}

  currentTodo: TodoModel[] = [];
  inTodo = <TodoModel> {};
  newTitle?: string;

  ngOnInit(): void {
    this.store.select(todoState.getTodoObject).subscribe({
      next: (value) => {
        this.currentTodo = value;
      }
    });
  };


  active(id: number) {
    this.store.dispatch(new Completed(id));
  }

  add() {

    this.inTodo = {
      title: this.newTitle,
      id: Math.floor(Math.random() * 1000),
      isActive: false,
    };

    this.store.dispatch(new AddTodo(this.inTodo));

    this.newTitle = '';
  };

  delete(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  };

}
