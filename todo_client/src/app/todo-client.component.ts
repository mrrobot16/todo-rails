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
  todo = null; // fix in [Object Object] in the html

  constructor(private http_service: HttpService) {
    console.log("plain todo: ", this.todo);
  }

  ngOnInit() {
    this.get_todos();
  }

  // Note get my todos ---> TO CONTINUE YOU SAID CYBERSTRIKE WITNESS
  get_todos():Promise<any> {
  return this.http_service.get_todos().then(
    (todos) => this.todos = todos
  );
  }

  update_todo(todo: Todo):Promise<any>{
    console.log("TODO PUT", todo);
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }

  complete_todo(todo: Todo):Promise<any>{
    console.log("COMPLETE TODO PUT", todo);
    todo.completed = !todo.completed;
    console.log("COMPLETE TODO PUT2", todo)
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }

  archive_todo(todo: Todo):Promise<any>{
    console.log("Archive TODO PUT", todo);
    todo.archived != todo.archived;
    console.log("Archive TODO PUT2", todo)
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }


  addTodo(todo) {
    console.log("todo typeof: ", typeof todo);
    // console.log(todo);
    let new_todo = new Todo();
    new_todo.description = todo;
    new_todo.archived = false;
    new_todo.completed = false;
    this.http_service.add_todo(new_todo).then(todo=>this.get_todos());
  }

  delete_todo(todo):Promise<any>{
    return this.http_service.delete(todo).then(()=> this.get_todos());
  }

}
