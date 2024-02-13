<script>
import { RouterView, RouterLink } from 'vue-router'

export default {}
</script>

<template>
  <header>
    <ul>
      <router-link to="/public">
        <li>Public</li>
      </router-link>
      <router-link to="/private">
        <li>Private</li>
      </router-link>
      <router-link to="/login">
        <li>Login</li>
      </router-link>
    </ul>
  </header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  padding: 75px;
  background-color: bisque;

  ul {
    list-style: none;
    display: flex;
    gap: 25px;
    font-size: 30px;

    a {
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 184px);
  gap: 25px;
}
</style>
