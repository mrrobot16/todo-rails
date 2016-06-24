import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoClientAppComponent } from '../app/todo-client.component';

beforeEachProviders(() => [TodoClientAppComponent]);

describe('App: TodoClient', () => {
//   it('should create the app',
//       inject([TodoClientAppComponent], (app: TodoClientAppComponent) => {
//     expect(app).toBeTruthy();
//   }));
//
//   it('should have as title \'todo-client works!\'',
//       inject([TodoClientAppComponent], (app: TodoClientAppComponent) => {
//     expect(app.title).toEqual('todo-client works!');
//   }));
});
