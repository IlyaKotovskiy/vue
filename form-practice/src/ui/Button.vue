<template>
  <button :type="type">{{ title }}</button>
</template>

<script>
export default {
  props: ['type', 'title'],
};
</script>

<style scoped>
button {
  border-radius: 56px;
  background: linear-gradient(180deg, #9e96f2 0%, #ec31f0 100%);
  box-shadow: 0px 3px 12px 0px rgba(74, 58, 255, 0.18);
  color: #fff;
  border: none;
  outline: none;
  padding: 8px 18px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}
</style>
