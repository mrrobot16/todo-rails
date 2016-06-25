import { Component, OnInit } from '@angular/core';
import {Todo} from './models/todo.model';
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
  public todos: Todo[];
  todo =  new Todo();
  constructor(private http_service: HttpService){
    console.log(this.todo);
  }

  ngOnInit(){
    this.get_todos();
  }
  // Note get my todos ---> TO CONTINUE YOU SAID CYBERSTRIKE WITNESS
  get_todos(){
    this.http_service.get_todos().then((todos)=> this.todos = todos);
  }


  addTodo(){
    this.http_service.add_todo(this.todo).then(todo=>this.get_todos());
  }


}
