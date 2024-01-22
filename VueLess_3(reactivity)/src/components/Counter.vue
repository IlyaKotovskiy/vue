<template>
  <h2>Counter</h2>
  <p>{{ count }}</p>
  <button @click="incr(100)">Incr</button>
  <button @click="decr(1)">-1</button>
  <button @click="decr(100)">-100</button>
  <button @click="console.log(count)">log</button>
  <button @click="eventHandle(count, $event)">Event Handle</button>
  <button @click="modal()">Modal</button>
  <input @keydown="eventHandle(count, $event)" />
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incr(n) {
      this.count += n;
    },
    decr(n) {
      this.count -= n;
    },
    eventHandle(count, e) {
      console.log(count, e);
    },
    modal() {
      const md = prompt();
      if (isNaN(md)) {
        this.count = 0;
      } else this.count += +md;
    },
  },
};
</script>

<style></style>
