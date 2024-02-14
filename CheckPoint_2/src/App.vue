<template>
  <header-component></header-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style></style>