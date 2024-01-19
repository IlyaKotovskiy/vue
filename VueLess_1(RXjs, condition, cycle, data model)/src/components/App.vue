<template>
  <cycle></cycle>
</template>

<script>
import Block from './Block.vue';
import Cycle from './Cycle.vue';

export default {
  components: {
    Block,
    Cycle
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  p {
    margin: 0;
  }
  .title {
    color: red;
  }
</style>
