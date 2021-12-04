import { todo } from 'src/app/todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: todo = new todo;
  @Output() toDoDelete :EventEmitter<todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onClick(todo:todo){
  this.toDoDelete.emit(todo);
  console.log("click generatr")
}
}
