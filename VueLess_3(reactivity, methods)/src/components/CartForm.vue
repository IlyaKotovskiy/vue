<template>
  <h1>Form</h1>
  <!-- <input :value="message" @input="message = $event.target.value" /> -->
  <input v-model="message" placeholder="message" />
  <input type="checkbox" v-model="checked" placeholder="checked">
  <button @click="handleValidate">Validate</button>

  <p>message: {{ message }}</p>
  <p>checked: {{ checked }}</p>
  <p>input validated: {{ validate }}</p>
  <h2>Words</h2>
  <div class="list">
    <div v-for="word in words">{{ word }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      checked: false,
      validate: false,
      words: []
    }
  },
  methods: {
    handleValidate() {
      if (this.message !== 'admin' && this.message !== '' && this.checked === true) {
        this.validate = true
        this.words.push(this.message)
      }
    }
  }
}
</script>

<style scoped>

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

</style>