import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<number>();
  newDescription= '';
  closeResult: string;

  constructor(private todoService: TodoService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  onEditTodo(modalTodo, todo: Todo): void {
    this.open(modalTodo);
  }

  onSaveTodo() {
    this.todo.description = this.newDescription;
    this.todoService.updateTodo(this.todo).subscribe((res) => {
        this.newDescription = '';
        this.modalService.dismissAll();
      },
      error => console.error);
  }
  
    onChangeState() {
      this.todo.state = !this.todo.state;
      this.todoService.updateTodo(this.todo).subscribe((res) => {
  
        },
        error => console.error);
    }
  
    onDeleteTodo() {
      this.todoService.deleteTodo(this.todo.id).subscribe(res => this.deleteTodo.emit(this.todo.id));
    }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
