<template>
  <h2>Counter</h2>
  <p>{{ count }}</p>
  <button @click="incr(100)">Incr</button>
  <button @click="console.log(count)">log</button>
  <button @click="eventHandle(count, $event)">Event Handle</button>
  <input @keydown="eventHandle(count, $event)" />
</template>

<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incr(n) {
      this.count += n
    },
    eventHandle(count, e) {
      console.log(count, e)
    }
  }
}

</script>

<style></style>