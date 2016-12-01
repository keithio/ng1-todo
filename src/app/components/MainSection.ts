import {TodoService, Todo} from '../todos/todos';

class MainSectionController {
  filter: string = 'show_all';
  completeReducer: Function;
  todos: any[];

  /** @ngInject */
  constructor(public todoService: TodoService) {
    this.completeReducer = (count: number, todo: Todo): number => {
      return todo.completed ? count + 1 : count;
    };
  }

  handleClearCompleted() {
    this.todos = this.todoService.clearCompleted(this.todos);
  }

  handleCompleteAll() {
    this.todos = this.todoService.completeAll(this.todos);
  }

  handleShow(filter: string) {
    this.filter = filter;
  }

  handleChange(id: number) {
    this.todos = this.todoService.completeTodo(id, this.todos);
  }

  handleSave(e: any) {
    if (e.text.length === 0) {
      this.todos = this.todoService.deleteTodo(e.id, this.todos);
    } else {
      this.todos = this.todoService.editTodo(e.id, e.text, this.todos);
    }
  }

  handleDestroy(e: any) {
    this.todos = this.todoService.deleteTodo(e, this.todos);
  }
}

export const MainSection: angular.IComponentOptions = {
  template: require('./MainSection.html'),
  controller: MainSectionController,
  bindings: {
    todos: '=',
    filter: '<'
  }
};