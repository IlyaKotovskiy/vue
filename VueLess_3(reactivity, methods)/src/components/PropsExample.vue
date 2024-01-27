<template>
  <h1 @click="handleLog">{{ title }}</h1>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      handleLog() {
        this.$emit('handle', this.title) // регистрация события
      }
    }
  }
</script>