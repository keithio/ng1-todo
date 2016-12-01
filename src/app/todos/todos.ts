import {assign} from '../assign';

export class Todo {
  id: number;
  completed: boolean;
  text: string;
}

export const initialTodos: Todo[] = [
  {
    text: 'Convert to Components',
    completed: false,
    id: 3
  },
  {
    text: 'Switch to TypeScript',
    completed: false,
    id: 2
  },
  {
    text: 'Use a module loader like Webpack or SystemJS',
    completed: true,
    id: 1
  },
  {
    text: 'Follow the Angular Style Guide',
    completed: true,
    id: 0
  }
];

export class TodoService {
  addTodo(text: string, todos: Todo[]) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text
      }
    ].concat(todos);
  }

  completeTodo(id: number, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id: number, todos: Todo[]) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, text: string, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos: Todo[]) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos: Todo[]) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

