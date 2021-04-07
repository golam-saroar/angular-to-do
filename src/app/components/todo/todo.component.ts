import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo:Todo){
    // update the UI
    this.todo.completed = !this.todo.completed;
    // send the request to server
    this.todoService.toggleTodo(todo).subscribe(todo=>{
      console.log(todo);
    })
  }
  onDelete(todo:Todo){
    console.log('delete');
  }

}
