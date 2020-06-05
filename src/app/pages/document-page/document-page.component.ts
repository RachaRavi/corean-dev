import { Component, OnInit } from '@angular/core';
import *  as DecoupledDocumentEditor from '../../../external-modules/ckeditor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css']
})

export class DocumentPageComponent implements OnInit {

  newTodo: string;
  todos: any;
  todoObj: any;

  constructor(private router: Router) {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj.newTodo);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

     
    /**
     * This is Overrided method for OnInit
     */
    ngOnInit() {
    }

    /**
     * Next page
     */
    next() {
      console.log(this.todos);
      this.router.navigate(['/document/template'],{ queryParams: { data: this.todos } } );
      //setTimeout(function() {    }.bind(this), 3000);
    }
}
