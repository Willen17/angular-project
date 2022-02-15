import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent extends Todo {
  @Output() newToDoEvent = new EventEmitter<Todo>();

  addNewToDo(input: HTMLInputElement) {
    this.newToDoEvent.emit({ content: input.value, completed: false });
    input.value = '';
  }
}
