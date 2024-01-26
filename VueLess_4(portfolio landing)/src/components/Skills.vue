<template>
  <section class="skills">
    <div class="container">
      <h2 class="title">Skills</h2>
      <p class="descr">I work in such technologies as</p>
      <ul class="list">
        <li
          v-for="skill in skills"
          class="listElem"
        >
          <img :src="skill.image" :alt="skill.title">
          <h3>{{ skill.title }}</h3>
          <div class="starsWrap">
            <span
              v-for="star in 5"
              :class="['fa', 'fa-star', { 'active': star <= skill.rate }]"
            ></span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, title: 'HTML5', rate: 4, image: '../../src/assets/media/html.png' },
        { id: 1, title: 'CSS3', rate: 3, image: '../../src/assets/media/css.png' },
        { id: 1, title: 'JavaScript', rate: 4, image: '../../src/assets/media/js.png' },
        { id: 1, title: 'React', rate: 5, image: '../../src/assets/media/react.png' },
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 110px 0;
}

.title {
  font-size: 34px;
  text-align: center;
  margin-bottom: 70px;
}

.descr {
  font-size: 18px;
  text-align: center;
  margin-bottom: 80px;
}


.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listElem {
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 14px;
    text-align: center;
    margin-bottom: 40px;
  }
}

.starsWrap {
  display: flex;
  justify-content: space-between;
}

.active {
	color: orange
}
</style>