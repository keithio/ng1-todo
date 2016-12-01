/// <reference path="../../../typings/index.d.ts" />

import {TodoService, initialTodos, Todo} from './todos';

describe('TodoService', () => {
  let todos: Todo[];
  let todoService;

  beforeEach(() => {
    todos = initialTodos;
    todoService = new TodoService();
  });

  it('should add a todo to the list', () => {
    const res: Todo[] = todoService.addTodo('Hello', todos);
    expect(res.length).toEqual(5);
    expect(res[0].id).toEqual(4);
  });

  it('should complete a todo', () => {
    const res: Todo[] = todoService.completeTodo(0, todos);
    expect(res.length).toEqual(4);
    expect(res[0].completed).toEqual(false);
  });

  it('should delete a todo', () => {
    const res: Todo[] = todoService.deleteTodo(0, todos);
    expect(res.length).toEqual(3);
  });

  it('should edit a todo', () => {
    const res: Todo[] = todoService.editTodo(0, 'Changed it', todos);
    expect(res.length).toEqual(4);
    expect(res[3].text).toEqual('Changed it');
  });

  it('should complete all todos', () => {
    let res: Todo[] = todoService.addTodo('Hello', todos);
    res = todoService.completeAll(res);
    for (const todo of res) {
      expect(todo.completed).toEqual(true);
    }
  });

  it('should clear all completed todos', () => {
    let res: Todo[] = todos;
    res = todoService.clearCompleted(res);
    expect(res.length).toEqual(2);
    expect(res[0].completed).toEqual(false);
    expect(res[1].completed).toEqual(false);
  });
});
