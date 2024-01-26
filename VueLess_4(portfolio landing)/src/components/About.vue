<template>
  <section class="about">
    <div class="container">
      <div class="wrapper">
        <h2 class="title">About me</h2>
        <div class="descr">
          <p>Hi, I'm Alex – web developer from Karaganda.</p>
          <p>I'm interested in development and everything connected with it.</p>
          <p>Ready to implement excellent projects
            with wonderful people.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.about {
  background-color: #F6F6F6;
  padding: 130px 0;
}

.wrapper {
  text-align: center;
}

.descr {
  p {
    font-size: 18px;

    &:nth-child(2) {
      margin-bottom: 16px;
    }
  }
}

.title {
  font-size: 34px;
  margin-bottom: 20px;
}
</style>