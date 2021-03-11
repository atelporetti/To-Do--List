import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  updateTodo(todo: Todo) {
    return this.httpClient.put(`http://localhost:8080/todo/`, todo);
  }

  getTodo() {
    return this.httpClient.get('http://localhost:8080/todo/');
  }

  deleteTodo(idTodo) {
    return this.httpClient.delete(`http://localhost:8080/todo/?idTodo=${idTodo}`);
  }

  addTodo(todo: string) {
    return this.httpClient.post<any>('http://localhost:8080/todo/', todo);
  }
}
