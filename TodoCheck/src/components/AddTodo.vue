<template>
  <section>
    <div class="container">
      <div class="input_elem">
        <input
          type="text"
          placeholder="Новая задача"
          v-model="message"
          @keyup.enter="addTodoItem(message)"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    addTodoItem(title) {
      this.$emit('addTodoItem', title);
    }
  }
}
</script>

<style></style>