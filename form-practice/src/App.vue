<template>
  <header-component></header-component>
  <info></info>
  <form-component></form-component>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import Info from './components/Info.vue';
import FormComponent from './components/Form.vue';

export default {
  components: {
    HeaderComponent,
    Info,
    FormComponent
  }
}
</script>

<style></style>