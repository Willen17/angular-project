import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Todo {
  title = 'angular-project';
  toDos: Todo[] = [];

  addToDo(newItem: Todo) {
    this.toDos.push(newItem);
  }
}
