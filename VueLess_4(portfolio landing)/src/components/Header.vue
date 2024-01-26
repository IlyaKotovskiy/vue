<template>
  <header>
    <div class="container">
      <ul class="list">
        <li v-for="navEl in nav">
          <a :href="navEl.link">{{ navEl.title }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { id: 1, title: 'Home', link: '#' },
        { id: 2, title: 'About me', link: '#' },
        { id: 3, title: 'Skills', link: '#' },
        { id: 4, title: 'Portfolio', link: '#' },
        { id: 5, title: 'Contacts', link: '#' },
      ]
    }
  }
}
</script>

<style scoped>
  header {
    padding-top: 30px;
  }

  .list {
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    padding-bottom: 30px;
    margin-bottom: 40px;
    border-bottom: 1px solid #828282;

    li {
      &:not(:nth-child(1)) {
        color: #828282;
      }
    }
  }
</style>