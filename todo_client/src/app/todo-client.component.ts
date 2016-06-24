import { Component } from '@angular/core';
import {HttpService} from './services/http.service';
import {HTTP_PROVIDERS, Http} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'todo-client-app',
  templateUrl: 'todo-client.component.html',
  styleUrls: ['todo-client.component.css'],
  providers:[HTTP_PROVIDERS, HttpService]
})
export class TodoClientAppComponent {
  constructor(private http_service: HttpService){
    console.log("TodoClientAppComponent on the move");
  }

  call_api(){
    console.log("Calling rails api");
    this.http_service.get_todos();
  }
}
