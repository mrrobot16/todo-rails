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
  completed = false;
  archived = false;
  todo = null; // fix in [Object Object] in the html

  constructor(private http_service: HttpService) {
    console.log("plain todo: ", this.todo);
  }

  ngOnInit() {
    this.get_todos();
  }

  // Note get my todos ---> TO CONTINUE YOU SAID CYBERSTRIKE WITNESS
  get_todos():Promise<any> {
  return this.http_service.get_todos().then((todos)=> {
      this.todos = todos
    });
  }

  update_todo(todo: Todo):Promise<any>{
    console.log("getTodo By ID::::: ", todo);
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }

  complete(todo) {
    console.log("complete todo: ", todo);
    if(this.completed){
      this.completed = false;
    }
    else {
      this.completed = true;
    }
  }

  archive(todo) {
    console.log("archived todo: ", todo);
    if(this.archived) {
      this.archived = false;
    }
    else {
      this.archived = true;
    }
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

}
