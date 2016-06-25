"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_model_1 = require('./models/todo.model');
var http_service_1 = require('./services/http.service');
var http_1 = require('@angular/http');
var TodoClientAppComponent = (function () {
    function TodoClientAppComponent(http_service) {
        this.http_service = http_service;
        this.todo = null; // fix in [Object Object] in the html
        console.log("plain todo: ", this.todo);
    }
    TodoClientAppComponent.prototype.ngOnInit = function () {
        this.get_todos();
    };
    // Note get my todos ---> TO CONTINUE YOU SAID CYBERSTRIKE WITNESS
    TodoClientAppComponent.prototype.get_todos = function () {
        var _this = this;
        return this.http_service.get_todos().then(function (todos) { return _this.todos = todos; });
    };
    TodoClientAppComponent.prototype.update_todo = function (todo) {
        var _this = this;
        console.log("TODO PUT", todo);
        return this.http_service.update_todo(todo)
            .then(function () { return _this.get_todos(); });
    };
    TodoClientAppComponent.prototype.complete_todo = function (todo) {
        var _this = this;
        console.log("COMPLETE TODO PUT", todo);
        todo.completed = !todo.completed;
        console.log("COMPLETE TODO PUT2", todo);
        return this.http_service.update_todo(todo)
            .then(function () { return _this.get_todos(); });
    };
    TodoClientAppComponent.prototype.archive_todo = function (todo) {
        var _this = this;
        console.log("Archive TODO PUT", todo);
        todo.archived != todo.archived;
        console.log("Archive TODO PUT2", todo);
        return this.http_service.update_todo(todo)
            .then(function () { return _this.get_todos(); });
    };
    TodoClientAppComponent.prototype.addTodo = function (todo) {
        var _this = this;
        console.log("todo typeof: ", typeof todo);
        // console.log(todo);
        var new_todo = new todo_model_1.Todo();
        new_todo.description = todo;
        new_todo.archived = false;
        new_todo.completed = false;
        this.http_service.add_todo(new_todo).then(function (todo) { return _this.get_todos(); });
    };
    TodoClientAppComponent.prototype.delete_todo = function (todo) {
        var _this = this;
        return this.http_service.delete(todo).then(function () { return _this.get_todos(); });
    };
    TodoClientAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-client-app',
            templateUrl: 'todo-client.component.html',
            styleUrls: ['todo-client.component.css'],
            providers: [http_1.HTTP_PROVIDERS, http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], TodoClientAppComponent);
    return TodoClientAppComponent;
}());
exports.TodoClientAppComponent = TodoClientAppComponent;
//# sourceMappingURL=../todo-client.component.js.map