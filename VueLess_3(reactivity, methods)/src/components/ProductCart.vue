// Задание.
// Создайте компонент ProductCard, который будет формировать разметку
// с Заголовокм (имя товара), параграфом (цена товара), а также кнопка, которая должна будет удалять
// сам товар (X).
// Необходимо пройтись по модели products и циклично вернуть компонент ProductCard, передав все необходиые
// пропы, в том числе и метод, который реализует удаление по ID (по клику на кнопку)

<template>
  <h2>{{ title }}</h2>
  <p>{{ price }}</p>
  <button @click="deleteProductById">X</button>
</template>

<script>
export default {
  props: ['title', 'price', 'id'],
  methods: {
    deleteProductById(id) {
      this.$emit('deleteProductById', this.id)
    }
  }
}
</script>

<style></style>