<template>
    <h1 class="title">Hello world!</h1>
    <block></block>
    <content-list></content-list>
</template>

<script>
  import Block from './Block.vue';
  import ContentList from './ContentList.vue';

  export default {
    components: {
      Block,
      ContentList
    }
  }
</script>

<style>
  .title {
    color: red;
  }
</style>