import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class HttpService{
  public todos:any;
  public todo_end: string;
  constructor(private http: Http){
    console.log("Http Service on the move");
    this.todo_end = "http://localhost:3000/todos";
  }

  // NOTE f(x) for gettings todos from rails api
  get_todos():Observable<any>{
    console.log("getting todos:");
    this.todos = this.http.get(this.todo_end);
    this.todos.subscribe((todos)=>this.todos_data(todos));
    return;
  }

  todos_data(res: Response):any{
    console.log("todos_data()");
    var todos = res.json();
    console.log(todos);
    return todos;
  }


}
