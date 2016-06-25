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
  show_archive = false;
  toggle_display = "Show"

  constructor(private http_service: HttpService) {

  }

  ngOnInit() {
    this.get_todos();
  }

  // Get all todos
  get_todos():Promise<any> {
    var get_call = this.http_service.get_todos();
    if(this.show_archive == false){
      return get_call.then(
        (todos) => {
          this.todos = todos.filter((todo) => todo.archived == false);
        });;
    }
    else {
      return get_call.then(
        (todos) => {
          this.todos = todos;
        });
    }
  }

  // Update our todo
  update_todo(todo: Todo):Promise<any>{
    return this.http_service.update_todo(todo)
    .then(
      ()=>this.get_todos()
    );
  }

  // Makes todo.completed equal to the oposite of his current value
  complete_todo(todo: Todo):Promise<any>{
    todo.completed = !todo.completed;
    return this.http_service.update_todo(todo)
    .then(()=>this.get_todos());
  }

  // Makes todo.archived equal to the oposite of his current value
  archive_todo(todo: Todo):Promise<any>{
    todo.archived = !todo.archived;
    return this.http_service.update_todo(todo)
    .then(()=>this.get_todos());
  }

  // Toggle Archived Todos
  show_archived(){
      this.show_archive = !this.show_archive;
      this.toggle_display = this.show_archive ? "Hide" : "Show";
      this.get_todos();
  }

  // Adds todo our rails server
  addTodo(todo) {
    let new_todo = new Todo();
    new_todo.description = todo;
    new_todo.archived = false;
    new_todo.completed = false;
    this.http_service.add_todo(new_todo).then(todo=>this.get_todos());
  }

  // Deletes todo from server
  delete_todo(todo):Promise<any>{
    return this.http_service.delete_todo(todo).then(()=> this.get_todos());
  }

}
