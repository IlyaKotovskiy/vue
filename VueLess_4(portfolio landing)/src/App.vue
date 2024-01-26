<template>
  <header-component></header-component>
  <preview></preview>
  <about></about>
  <skills></skills>
  <contacts></contacts>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import Preview from './components/Preview.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Contacts from './components/Contacts.vue';

export default {
  components: {
    HeaderComponent,
    Preview,
    About,
    Skills,
    Contacts
  }
}
</script>

<style></style>