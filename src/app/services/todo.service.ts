import { Todo } from './../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  limit:string = '?_limit=5'
  
  constructor( private http: HttpClient) { }

  getTodos(): Observable<Todo[]>  {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
  }
  toggleTodo(todo:Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
}

