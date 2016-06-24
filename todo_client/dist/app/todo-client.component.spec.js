"use strict";
var testing_1 = require('@angular/core/testing');
var todo_client_component_1 = require('../app/todo-client.component');
testing_1.beforeEachProviders(function () { return [todo_client_component_1.TodoClientAppComponent]; });
testing_1.describe('App: TodoClient', function () {
    testing_1.it('should create the app', testing_1.inject([todo_client_component_1.TodoClientAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'todo-client works!\'', testing_1.inject([todo_client_component_1.TodoClientAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('todo-client works!');
    }));
});
//# sourceMappingURL=../todo-client.component.spec.js.map