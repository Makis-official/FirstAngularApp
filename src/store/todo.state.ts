import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { TodoModel, TodoStateModel } from "./model/auth.model";
import { AddTodo, Completed, DeleteTodo } from "./model/auth.model";

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        items: []
    }
})


@Injectable()
export class todoState {
    
    @Action(AddTodo)
  addTodo({getState, patchState}: StateContext<TodoStateModel>, 
    {payload}: AddTodo) {
        const state = getState();
        patchState({
            items: [...state.items, payload]
        });
    };


  @Action(DeleteTodo)
  remove({getState, patchState}: StateContext<TodoStateModel>, 
    {payload}: DeleteTodo) {
        const state = getState();
        patchState({
            items: state.items.filter(todo => todo.id !== payload)          
        });
    };

    @Action(Completed)
    complet({getState, patchState}: StateContext<TodoStateModel>,
        {payload}: Completed) {
            const state = getState();

            const update: TodoModel[] =  state.items.map(
            todo => { if (todo.id === payload) 
            {
                return {...todo, isActive: !todo.isActive};
            }
                return todo;
            });
            
            patchState({
                items: update
            });
        };

    @Selector()
    static getTodoObject(state: TodoStateModel) {
        return state.items;
    };

}