<template>
  <header>
    <div class="container">
      <ul class="nav">
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/users">
          <li>Users</li>
        </router-link>
        <router-link to="/profile">
          <li>Profile</li>
        </router-link>
      </ul>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {}
</script>

<style scoped>
header {
  padding: 30px 0;
}

.nav {
  display: flex;
  gap: 16px;
  justify-content: flex-end;

  a {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>