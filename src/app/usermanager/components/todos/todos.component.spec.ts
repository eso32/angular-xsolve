import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { TodosService } from '../../services/todos/todos.service';
import { TodosComponent } from './todos.component';

const todosServiceStub = {
  getAllTodos() {
    const todos = [{ id: 1 }];
    return of(todos);
  }
};

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: TodosService, useValue: todosServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get values from subscription', () => {
    expect(component.todos.length).toEqual(1);
  });
});
