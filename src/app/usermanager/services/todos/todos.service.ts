import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../models/enums/URLS.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<any> {

    return this.httpClient.get<any>(URLS.PLACEHOLDER_TODOS);
  }
}
