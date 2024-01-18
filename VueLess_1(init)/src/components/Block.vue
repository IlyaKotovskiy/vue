<template>
  <div v-if="num % 2 === 0">Hello!</div>
  <img v-if="num2 % 10 === 0" :src="srcImage" alt="img">
</template>

<script>
const num = 10;
const num2 = Math.floor(Math.random() * (50 - 1) + 1);

export default {
  data() {
    return {
      num,
      num2,
      srcImage: 'https://freepngimg.com/thumb/happy/144618-emoji-happy-free-clipart-hd.png'
    }
  }
}
</script>

<!-- scoped - позволяет не передавать стили другим копонентам -->
<style scoped>
  .block {
    color: purple;
  }
</style>