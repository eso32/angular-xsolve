import { TestBed, inject } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService],
      imports: [
        HttpClientModule        
      ]
    });
  });

  it('should be created', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
