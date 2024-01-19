<template>
  <header class="header"
          style="background: url('../../src/assets/media/Header.png') no-repeat center center / cover;">
    <div class="container">
      <h1 class="title">РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ</h1>
      <p class="descr">стадионы, газопроводы, мосты, дамбы</p>
      <div class="wrapper">
        <div v-for="elem in data" class="wrapper-elem">
          <span>{{ elem.years }}</span>
          <span>лет</span>
          <p>{{ elem.description }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: 1, years: 26, description: 'на рынке' },
        { id: 2, years: 20, description: 'заботимся об экологии' },
        { id: 3, years: 15, description: 'преподаем технологии' },
        { id: 4, years: 33, description: 'является лидерами' }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  padding-top: 200px;
  color: #fff;
  text-align: center;
}

.title {
  margin: 0 auto;
  width: 730px;
  font-size: 64px;
  margin-bottom: 35px;
}

.descr {
  font-size: 18px;
  margin-bottom: 20px;
}

.wrapper {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 55px 130px;
}

.wrapper-elem {
  display: flex;
  flex-direction: column;

  span {
    display: block;
    text-transform: uppercase;
    font-weight: 500;

    &:nth-child(1) {
      color: #F7654A;
      font-size: 72px;
      margin-bottom: 25px;
    }
    &:nth-child(2) {
      color: #000;
      font-size: 36px;
      margin-bottom: 10px;
    }
  }

  p {
    color: #999;
    font-size: 18px;
  }
}
</style>