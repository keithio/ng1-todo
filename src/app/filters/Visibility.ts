import {Todo} from '../todos/todos';

export function VisibilityFilter() {
  return (todo: Todo, visibility: string): Todo => {
    if (visibility === 'show_all') {
      return todo;
    } else if (visibility === 'show_completed' && todo.completed) {
      return todo;
    } else if (visibility === 'show_active' && !todo.completed) {
      return todo;
    } else {
      return undefined;
    }
  };
};
