package com.aporetti.todo.service;

import com.aporetti.todo.entity.Todo;

import java.util.List;

public interface TodoService {
	public Boolean saveTodo(String todoDescription);

	public List<Todo> getAllTodos();

	public Boolean deleteTodo(Long idTodo);

	public boolean updateTodo(Todo todo);
}
