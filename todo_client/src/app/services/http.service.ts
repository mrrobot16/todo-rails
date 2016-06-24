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
    console.log("add_todo service 1");
    return this.post(todo);
  }

  private post(todo: Todo): Promise<Todo> {
    console.log('post in service 2 todo argument: ', todo);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.todo_end, JSON.stringify(todo), { headers: headers })
      .toPromise()
      .then(res => res.json());
      // {"todo"=> {"description"=> "jello"}}
      // {"_json"=>"hello", "todo"=>{}}
  }


}
