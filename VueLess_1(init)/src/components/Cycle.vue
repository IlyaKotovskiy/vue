<template>
  <h2>Cycle</h2>
  <h3>Numbers</h3>
  <ul>
    <li v-for="(number, ind) in numbers" :key="ind">
      {{ number }}
    </li>
  </ul>
  <h3>Products</h3>
  <div>
    <p v-for="product in prodcutList" :key="product.id" :id="`el_${product.id}`">
      {{ product.title }}
    </p>
  </div>
  <div class="cards-wrap">
    <div class="card" v-for="product in data" :key="product.id">
      <img :src="product.image" :alt="product.title" />
      <h3 class="card-title">{{ product.title }}</h3>
      <p class="card-brand">{{ product.brand }}</p>
      <p class="card-price">{{ product.price }} $</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [10, 20, 30, 40, 50],
      prodcutList: [
        { id: 1, title: 'Велосипед' },
        { id: 2, title: 'Самокат' },
        { id: 3, title: 'Ролики' }
      ],
      data: [
        {
          id: 1,
          title: 'Iphone X',
          image:
            'https://www.einfo.co.nz/media/catalog/product/cache/a38d1c83e0d63148b81a03ec284a15b5/i/2/i256s_4.jpg',
          brand: 'Apple',
          price: 1000,
          description: 'smartphone'
        },
        {
          id: 2,
          title: 'Game NoteBook',
          image: 'https://tec.by/images/stories/virtuemart/product/asus-rog-strix-g15-g513qe-3.jpg',
          brand: 'Asus',
          price: 3000,
          description: 'notebook'
        },
        {
          id: 3,
          title: 'Galaxy S33',
          image:
            'https://img.global.news.samsung.com/global/wp-content/uploads/2018/09/galaxy-a7_main_1.jpg',
          brand: 'Samsung',
          price: 1300,
          description: 'smartphone'
        }
      ]
    }
  }
}
</script>

<style>
  .cards-wrap {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    padding: 12px 0;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 250px;
      margin-bottom: 6px;
    }
  }

  .card-title {
    font-size: 28px;
    margin: 0 0 8px;
  }

  .card-brand {
    margin-bottom: 8px;
  }
</style>
