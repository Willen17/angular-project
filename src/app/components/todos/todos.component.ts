import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  faCross = faCross;
  constructor() {}

  toDos?: Todo[];

  inputToDo?: string = '';

  ngOnInit(): void {
    this.toDos = [];
  }

  toggleDone(id: number) {
    this.toDos?.map((value, index) => {
      if (index == id) value.completed = !value.completed;

      return value;
    });
  }

  deleteToDo(id: number) {
    // This function checks if Index isnt equal to the ID. If so, we are not going to return it.
    this.toDos = this.toDos?.filter((value, index) => index !== id);
  }

  addToDo() {
    //Here we push the input value to the toDo array.
    this.toDos?.push({
      content: this.inputToDo,
      completed: false,
    });

    // This sets the input field to blank afterwards.
    this.inputToDo = '';
  }
}
