<template>
  <section>
    <div class="container">
      <div class="wrap">
        <h3 class="title">Authorization</h3>
        <form @submit.prevent="login">
          <label>
            <p>Login</p>
            <input type="text"
                   v-model="loginForm.username">
          </label>
          <label>
            <p>Password</p>
            <input type="password"
                   v-model="loginForm.password">
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        localStorage.removeItem('token');

        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.loginForm.username,
            password: this.loginForm.password
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          this.$router.push('/profile');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>

section {
  padding: 80px 0;
}

.title { 
  font-size: 16px;
  margin-bottom: 20px;
}

.wrap {
  padding: 16px;
  width: 335px;
  box-shadow:
    0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  margin: 0 auto;
}

form,
label {
  display: flex;
  flex-direction: column;
}

form {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  p {
    color: gray;
    margin-bottom: 6px;
  }

  input {
    box-shadow:
      0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
      0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 6px 10px;
  }
}

button {
  margin-top: 12px;
  color: gray;
  background-color: transparent;
  font-size: 16px;
}
</style>