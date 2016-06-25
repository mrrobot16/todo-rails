import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
import {HttpService} from './services/http.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'todo-client-app',
  templateUrl: 'todo-client.component.html',
  styleUrls: ['todo-client.component.css'],
  providers:[HTTP_PROVIDERS, HttpService]
})

export class TodoClientAppComponent implements OnInit {
  todos: Todo[];
  // fix in [Object Object] in the html, this way we can placeholder only
  todo = null;

  constructor(private http_service: HttpService) {
  }

  ngOnInit() {
    this.get_todos();
  }

  // Gets all todos
  get_todos():Promise<any> {
    return this.http_service.get_todos().then(
      (todos) =>{
        this.todos = todos.filter((todo) => todo.archived === false);
      });
  }

  // update our todo
  update_todo(todo: Todo):Promise<any>{
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }

  // makes todo.completed equal to the oposite of his current value
  complete_todo(todo: Todo):Promise<any>{
    todo.completed = !todo.completed;
    return this.http_service.update_todo(todo)
    .then(()=>this.get_todos());
  }

  // makes todo.archived equal to the oposite of his current value
  archive_todo(todo: Todo):Promise<any>{
    todo.archived = !todo.archived;
    return this.http_service.update_todo(todo)
    .then(()=>this.get_todos());
  }

  // Adds todo our rails server
  addTodo(todo) {
    let new_todo = new Todo();
    new_todo.description = todo;
    new_todo.archived = false;
    new_todo.completed = false;
    this.http_service.add_todo(new_todo).then(todo=>this.get_todos());
  }

  // deletes todo from server
  delete_todo(todo):Promise<any>{
    return this.http_service.delete_todo(todo).then(()=> this.get_todos());
  }

}
