import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnChanges {
  faTrash = faTrash;
  faCheck = faCheck;
  faCross = faCross;

  @Input() toDos?: Todo[];

  completeToDo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteToDo(todo: Todo) {
    let index: number = this.toDos!.indexOf(todo);
    this.toDos?.splice(index, 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.toDos);
  }
}
