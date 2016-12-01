import {initialTodos, Todo} from '../todos/todos';

class AppController {
  todos: Todo[];
  filter: string;

  constructor() {
    this.todos = initialTodos;
    this.filter = 'show_all';
  }
}

export const App: angular.IComponentOptions = {
  template: require('./App.html'),
  controller: AppController
};
