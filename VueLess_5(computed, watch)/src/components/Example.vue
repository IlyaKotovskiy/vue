<template>
  <div>
    <h2>User</h2>
    <input type="text" v-model="name">
    <input type="text" v-model="lastname">
    <p>{{ fullName }}</p>
    <p>{{ conditionName }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'Alex',
      lastname: 'gggga'
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastname;
    },
    conditionName() {
      return this.name.length > 10 ? '> 10' : '< 10'
    }
  },
  // watch - аналог useEffect. Вносит изменения побочного кода при изменении модели.
  watch: {
    name() {
      console.log('The name has been changed! New name: ' + this.name)
    }
  },
  // mounted - аналог useEffect с пустыми скобками
  mounted() {
    console.log('mounted')
  }
}
</script>