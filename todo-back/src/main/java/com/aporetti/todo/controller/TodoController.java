package com.aporetti.todo.controller;

import com.aporetti.todo.entity.Todo;
import com.aporetti.todo.service.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("todo")
public class TodoController {

	@Autowired
	private TodoServiceImpl todoService;

	@GetMapping("/")
	public List<com.aporetti.todo.entity.Todo> findAllTodo() {
		return todoService.getAllTodos();
	}

	@PostMapping("/")
	public boolean addTodo(@RequestBody String todoDescription) {
		return todoService.saveTodo(todoDescription);
	}

	@DeleteMapping("/")
	public boolean deleteTodo(@RequestParam("idTodo") long idTodo) {
		return todoService.deleteTodo(idTodo);
	}

	@PutMapping("/")
	public boolean updateTodo(@RequestBody Todo todo) {
		return todoService.updateTodo(todo);
	}

}
