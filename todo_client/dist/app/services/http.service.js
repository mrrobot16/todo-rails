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
        this.all_todos = [];
        this.todo_end = "todos";
    }
    // GET all Todo's
    HttpService.prototype.get_todos = function () {
        return this.get();
    };
    // Post a Todo
    HttpService.prototype.add_todo = function (todo) {
        return this.post(todo);
    };
    // PUT a Todo
    HttpService.prototype.update_todo = function (todo) {
        return this.put(todo);
    };
    // Delete a Todo
    HttpService.prototype.delete_todo = function (todo) {
        return this.destroy(todo);
    };
    HttpService.prototype.get = function () {
        return this.http.get(this.todo_end)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // Called by add_todo();
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
    // Called by update_todo();
    HttpService.prototype.put = function (todo) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var updated_todo = {
            todo: todo
        };
        return this.http
            .put(this.todo_end + '/' + todo.id, JSON.stringify(updated_todo), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    // Called by delete_todo();
    HttpService.prototype.destroy = function (todo) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(this.todo_end + '/' + todo.id, { headers: headers })
            .toPromise().then(function (res) {
            console.log('res from delete: ', res);
        });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=../../http.service.js.map