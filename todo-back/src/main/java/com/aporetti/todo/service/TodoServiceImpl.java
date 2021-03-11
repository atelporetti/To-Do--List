package com.aporetti.todo.service;

import com.aporetti.todo.entity.Todo;
import com.aporetti.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public Boolean saveTodo(String todoDescription) {
        try {
            todoRepository.save(new Todo(todoDescription));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Boolean deleteTodo(Long idTodo) {
        try {
            todoRepository.deleteById(idTodo);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean updateTodo(Todo todo) {
        try {
            Todo oldTodo = todoRepository.findById(todo.getId()).get();
            oldTodo.setDescription(todo.getDescription());
            oldTodo.setState(todo.isState());
            todoRepository.save(oldTodo);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
