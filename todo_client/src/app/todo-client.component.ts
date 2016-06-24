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
  public new_todo: string;
  constructor(private http_service: HttpService){

  }

  ngOnInit(){
    this.get_todos();
  }

  get_todos(){
    this.http_service.get_todos().then((todos)=> this.todos = todos);
  }


  addTodo(){
    console.log("todo");
    console.log(this.new_todo);
  }

}
