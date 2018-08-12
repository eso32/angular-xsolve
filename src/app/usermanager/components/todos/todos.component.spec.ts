import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {MaterialModule} from '../../../shared/material/material.module'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodosService} from '../../services/todos/todos.service';
import {of} from 'rxjs';

const todosServiceStub = {
  getAllTodos() {
    const todos = [{id: 1}];
    return of( todos );
  }
};

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: TodosService, useValue: todosServiceStub}]
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
    // fixture.detectChanges();
    console.log(fixture);
    expect(component.todos.length).toEqual(1);
  });
});
