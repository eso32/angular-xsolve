import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: any;
  todoSubscription: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todoSubscription = this.todosService.getAllTodos().subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    this.todoSubscription.unsubscribe();
  }

}
