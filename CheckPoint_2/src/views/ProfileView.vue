<template>
  <section>
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="wrap">
        <div class="left">
          <div class="username">Username: {{ user.username }}</div>
          <div class="name">Name: {{ user.firstName }}</div>
          <div class="lastname">LastName: {{ user.lastName }}</div>
          <div class="gender">Gender: {{ user.gender }}</div>
          <div class="email">Email: {{ user.email }}</div>
        </div>
        <div class="right">
          <img :src="user.image"
               alt="">
        </div>
      </div>
      <h2 v-if="error">{{ error }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      error: ''
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });

      const data = await response.json();

      if (!data.message) this.user = data
      else this.error = data.message

      console.log(data)

    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 50px;
  font-size: 44px;
}

.wrap {
  display: flex;
  justify-content: space-around;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 11px;

  div {
    width: max-content;
    border-radius: 10px;
    box-shadow:
      0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
      0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
    padding: 8px 20px;
  }
}

.right {
  img {
    border-radius: 100%;
  }
}
</style>