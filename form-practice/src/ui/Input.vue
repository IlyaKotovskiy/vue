<template>
  <div class="wrap">
    <h4>{{ title }}</h4>
    <input :type="type" :placeholder="placeholder" required />
  </div>
</template>

<script>
export default {
  props: ['title', 'type', 'placeholder']
}
</script>

<style scoped>
  .wrap {
    h4 {
      font-size: 18px;
      margin-bottom: 17px;
    }

    input {
      border: 1px solid #EFF0F6;
      border-radius: 46px;
      padding: 16px 20px;
      font-size: 18px;
      width: 284px;
    }
  }
</style>