<template>
  <add-todo
    @addTodoItem="addTodoItem"
  ></add-todo>
  <todo-list
    :data="todos"
    @changeTodoItem="changeTodoItem"
    @removeTodoItem="removeTodoItem"
  ></todo-list>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  data() {
    return {
      todos: [
        { id: 1, title: 'Позавтракать', completed: true },
        { id: 2, title: 'Почистить огурцы', completed: false },
        { id: 3, title: 'Помыть кота', completed: true },
      ],
    };
  },
  components: {
    AddTodo,
    TodoList,
  },
  methods: {
    changeTodoItem(id) {
      const changedItem = this.todos.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      });

      this.todos = changedItem;
    },
    removeTodoItem(id) {
      const removedTasks = this.todos.filter(elem => elem.id !== id);

      this.todos = removedTasks;
    },
    addTodoItem(title) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false
      }

      this.todos = [newTodo, ...this.todos];
    }
  },
};
</script>

<style></style>
