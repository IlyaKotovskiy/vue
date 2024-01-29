<template>
  <section>
    <div class="container">
      <todo-item
        v-for="elem in data"
        :key="elem.id"
        :style="
          elem.completed ? 'background-color: green;' : 'background-color: red;'
        "
        :title="elem.title"
        @click="changeTodoItem(elem.id)"
        @dblclick="removeTodoItem(elem.id)"
      ></todo-item>
    </div>
  </section>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: ['data'],
  methods: {
    changeTodoItem(id) {
      this.$emit('changeTodoItem', id);
    },
    removeTodoItem(id) {
      this.$emit('removeTodoItem', id);
    }
  },
};
</script>

<style></style>
