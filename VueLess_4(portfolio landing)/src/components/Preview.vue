<template>
  <section class="preview">
    <div class="container">
      <div class="wrapper">
        <h1 class="title">Alex Wylliam</h1>
        <div class="mini-wrapper">
          <p>web developer</p>
          <p>28 years old, Karaganda</p>
        </div>
        <div class="lang">
          <p>RU</p>
          <p>ENG</p>
        </div>
      </div>
      <img src="../assets/media/BSPP2266.png" alt="Its I">
    </div>
  </section>
</template>

<script></script>

<style scoped>

.preview {
  padding-bottom: 100px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 30px;
}

.title {
  font-size: 48px;
  max-width: 160px;
}

.mini-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 18px;
}

.lang {
  display: flex;
  gap: 10px;
  /* transform: rotate(90deg); */

  p {
    &:nth-child(1) {
      color: #828282;
    }
  }
}

</style>