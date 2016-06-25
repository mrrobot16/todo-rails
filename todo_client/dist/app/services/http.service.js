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
var http_1 = require('@angular/http');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        console.log("Http Service on the move");
        this.all_todos = [];
        this.todo_end = "todos";
    }
    HttpService.prototype.get_todos = function () {
        return this.http.get(this.todo_end)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HttpService.prototype.add_todo = function (todo) {
        console.log("add_todo service 1: ", todo);
        return this.post(todo);
    };
    HttpService.prototype.get_todo = function (todo_id) {
        console.log("get_todo from clicking <li>");
        // return todo_id;
    };
    HttpService.prototype.update_todo = function (todo) {
        return this.put(todo);
    };
    HttpService.prototype.put = function (todo) {
        // Update existing TODO
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        // object sent to rails
        var updated_todo = {
            todo: {
                id: todo.id,
                description: todo.description
            }
        };
        return this.http
            .put(this.todo_end + '/' + todo.id, JSON.stringify(updated_todo), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HttpService.prototype.post = function (todo) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var todoParams = {
            todo: todo
        };
        return this.http
            .post(this.todo_end, JSON.stringify(todoParams), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=../../http.service.js.map