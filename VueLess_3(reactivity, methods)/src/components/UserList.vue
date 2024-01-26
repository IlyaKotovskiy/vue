<template>
  <div>
    user list
  </div>
  <div>
    <button @click="handle">Click</button>
    <button @click="deleteFirstUser">Delete First User</button>
    <h3
      v-for="user in users"
      :key="user.id"
      @dblclick="deleteUserById(user.id)"
    >
      {{ user.name }}
    </h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          { id: 1, name: 'Alex' },
          { id: 2, name: 'Steve' },
          { id: 3, name: 'Neena' },
          { id: 4, name: 'John' },
          { id: 5, name: 'Greeca' },
        ]
      }
    },
    methods: {
      handle() {
        this.users = this.users.map(letter => ({ ...letter, name: letter.name[0] }))
      },
      deleteFirstUser() {
        this.users.splice(0, 1);
      },
      deleteUserById(id) {
        this.users = this.users.filter((elem) => elem.id !== id);
      }
    }
  }
</script>

<style></style>