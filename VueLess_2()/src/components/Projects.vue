<template>
  <section class="projects">
    <div class="container">
      <h2 class="title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
      <div class="wrapper">
        <div
          v-for="project in projects"
          :key="project.key"
          class="wrapper-elem"
        >
          <img
            :src="project.image"
            :alt="project.title"
            width="100%"
            height="220px"
          >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: 'Многофункциональное здание', description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия.', image: 'https://teletype.in/files/f8/f6/f8f60304-dd5c-4a98-930b-4e1166160f8e.jpeg' },
        { id: 2, title: 'IT Колледж', description: 'Современный колледж на базе западной системе образования. Задача стояла в формировании многофункционального здания для решения всех современных проблем колледжа.', image: 'https://vmrucdn.servicecdn.ru/2021.05/original/60afa87282682c3df243a65c.jpg' },
        { id: 3, title: 'Здание выставки', description: 'Самое красивое здание в комплексе выставки достижений народного хозяйства. Данная архитекутура получила самые высокие награды', image: 'https://vdnh.ru/upload/resize_cache/iblock/b7f/1000_1000_1/b7fcf4db2c6bfdef5f1423a06fdd381d.jpg' }
      ]
    }
  }
}
</script>

<style scoped>

.title {
  color: #404149;
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
}
.projects {
  padding: 200px 0;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

.wrapper-elem {
  max-width: 350px;

  h3 {
    margin-top: 66px;
    font-size: 24px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: -22px;
      width: 55px;
      height: 6px;
      background-color: #F7654A;
    }
  }

  p {
    color: #999;
  }
}

</style>