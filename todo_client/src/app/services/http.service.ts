import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Todo} from '../models/todo.model';

@Injectable()
export class HttpService{
  public todos:any;
  public all_todos:any;
  public todo_end: string;

  constructor(private http: Http){
    console.log("Http Service on the move");
    this.all_todos = [];
    this.todo_end = "todos";
  }

  get_todos():Promise<any>{
    return this.http.get(this.todo_end)
           .toPromise()
           .then(res => res.json());
  }

  add_todo(todo: Todo):Promise<Todo>{
    console.log("add_todo service 1: ", todo);
    return this.post(todo);
  }

  get_todo(todo_id): void{
    console.log("get_todo from clicking <li>");
    // return todo_id;
  }

  update_todo(todo){
    return this.put(todo);
  }

  delete(todo){
    return this.destroy(todo);
  }

  private destroy(todo: Todo):Promise<void>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
    .delete(this.todo_end+'/'+todo.id, { headers: headers })
    .toPromise().then((res)=>{
      console.log('res from delete: ', res);
    });
  }

  private put(todo: Todo):Promise<Todo>{

  // Update existing TODO
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  // object sent to rails
  var updated_todo = {
    todo: todo
  }

  console.log({put: todo, updated_todo: updated_todo, json: JSON.stringify(updated_todo)})

  return this.http
    .put(this.todo_end+'/'+todo.id, JSON.stringify(updated_todo), { headers: headers })
    .toPromise()
    .then(res => res.json());
  }

  private post(todo: Todo): Promise<Todo> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let todoParams = {
      todo: todo
    }
    return this.http
      .post(this.todo_end, JSON.stringify(todoParams), { headers: headers })
      .toPromise()
      .then(res => res.json());
  }





}
