<template>
  <section class="home">
    <div class="container">
      <div class="wrapper">
        <div class="left-bock">
          <h1 class="title">Home Page</h1>
          <p class="descr">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <router-link to="/login"
                       class="btn">
            Authorization
          </router-link>
        </div>
        <div class="right-block">
          <img src="/home_img.png"
               alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.home {
  padding: 60px 0 120px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 70px;
}

.title {
  font-size: 44px;
  margin-bottom: 46px;
}

.descr {
  margin-bottom: 42px;
}

.btn {
  background-color: #FF6464;
  color: #fff;
  font-size: 20px;
  padding: 6px 38px;
  border-radius: 4px;
  transition: background-color .1s ease-in-out;

  &:hover {
    background-color: #eb5252;
  }
}
</style>