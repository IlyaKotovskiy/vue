<template>
  <h1>Login View</h1>
  <label>
    Enter passcode
    <input type="text" v-model="pass_code" @keydown="auth" />
    <p>{{ pass_code }}</p>
  </label>
</template>

<script>
export default {
  data() {
    return {
      pass_code: ''
    }
  },
  methods: {
    auth(e) {
      if (e.key === "Enter") {
        localStorage.setItem('password', this.pass_code)
      }
    }
  }
}
</script>
