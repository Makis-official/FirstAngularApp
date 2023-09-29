export interface TodoModel {
    id: number;
    title: string | undefined;
    isActive: boolean;
  }

export interface TodoStateModel {
  items: TodoModel[];
}

export class AddTodo {
    static readonly type = "[Todo] Add todo";
    constructor(public payload: TodoModel) {}
  }
   
  export class Completed {
    static readonly type = "[Todo] completed status";
    constructor(public payload: number) {}
  }

export class DeleteTodo {
    static readonly type = '[Todo]: Todo delete';
    constructor(public payload: number) {}
}