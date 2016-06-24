import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService{
  public todos:any;
  public all_todos:any;
  public todo_end: string;

  constructor(private http: Http){
    console.log("Http Service on the move");
    this.all_todos = [];
    this.todo_end = "http://localhost:3000/todos";
  }

  get_todos():Promise<any>{
    return this.http.get(this.todo_end)
           .toPromise()
           .then(res => res.json());
  }


}
