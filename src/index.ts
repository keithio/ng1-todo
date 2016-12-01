/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {VisibilityFilter} from './app/filters/Visibility';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .filter('visibility', VisibilityFilter)
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
