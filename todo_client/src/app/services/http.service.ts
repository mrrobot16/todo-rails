import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Todo} from '../models/todo.model';

@Injectable()
export class HttpService{
  public todos:any;
  public all_todos:any;
  public todo_end: string;

  constructor(private http: Http){
    this.all_todos = [];
    this.todo_end = "todos";
  }

  // GET all Todo's
  get_todos():Promise<any>{
    return this.get();
  }
  // Post a Todo
  add_todo(todo: Todo):Promise<Todo>{
    return this.post(todo);
  }

  // PUT a Todo
  update_todo(todo){
    return this.put(todo);
  }

  // Delete a Todo
  delete_todo(todo){
    return this.destroy(todo);
  }

  private get():Promise<Todo>{
    return this.http.get(this.todo_end)
           .toPromise()
           .then(res => res.json());
  }

  // Called by add_todo();
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

  // Called by update_todo();
  private put(todo: Todo):Promise<Todo>{
  let headers = new Headers({
    'Content-Type': 'application/json'
  });
  var updated_todo = {
    todo: todo
  }
  return this.http
    .put(this.todo_end+'/'+todo.id, JSON.stringify(updated_todo), { headers: headers })
    .toPromise()
    .then(res => res.json());
  }

  // Called by delete_todo();
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

}
