import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {}

  toDos?: Todo[];

  ngOnInit(): void {
    this.toDos = [
      {
        content: 'My first toDo',
        completed: false,
      },
      {
        content: 'Learn Angular-basics',
        completed: false,
      },
      {
        content: 'Finish my report about Angular',
        completed: false,
      },
    ];
  }
}
