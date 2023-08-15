
import { Component } from '@angular/core';

interface Todo {
    text: string;
 }

 @Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
 })

 export class TodoListComponent {
    newTodoText = '';
    todos: Todo[] = [];
 
    addTodo() {
        if (this.newTodoText.trim().length === 0) {
            return;
        }
 
        this.todos.push({ text: this.newTodoText });
        this.newTodoText = '';
    }
 }