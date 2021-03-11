import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  todoList: Array<Todo> = [];
  newTodo = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.findTodoList();
  }

  private findTodoList() {
    this.todoService.getTodo().subscribe((res: Array<Todo>) => {
      this.todoList = res;
    });
  }

  deleteItemTodo(e: any) {
    this.todoList = this.todoList.filter(todo => todo.id !== e);
  }

  addTodoItem() {
    this.todoService.addTodo(this.newTodo).subscribe(res => {
      this.newTodo = '';
      this.findTodoList();
    }, error => console.error);
  }
}
