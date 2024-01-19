<template>
  <header-component></header-component>
  <projects></projects>
  <smart-projects></smart-projects>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import Projects from './components/Projects.vue';
import SmartProjects from './components/SmartProjects.vue';
import FooterComponent from './components/Footer.vue';

  export default {
    components: {
      HeaderComponent,
      Projects,
      SmartProjects,
      FooterComponent
    }
  }
</script>

<style></style>