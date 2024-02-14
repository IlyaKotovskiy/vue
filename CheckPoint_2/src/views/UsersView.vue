<template>
  <section>
    <div class="container">
      <div class="users">
        <div class="user"
             v-for="user in users">
          <h2 class="fio">{{ user.firstName }} {{ user.lastName }} {{ user.maidenName }}</h2>
          <p class="email">{{ user.email }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => this.users = data.users)
  }
}

</script>

<style scoped>
section {
  padding: 50px 0;
}

.users {
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 auto;
}

.user {
  border-radius: 10px;
  box-shadow:
    0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.fio {
  font-size: 16px;
}

.email {
  color: gray;
}
</style>