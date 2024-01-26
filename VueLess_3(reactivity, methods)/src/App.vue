<template>
  <!-- <counter></counter> -->
  <!-- <user-list></user-list> -->

  <!-- Пример передачи пропов -->
  <!-- <props-example :title="numbers"></props-example> -->

  <!-- <props-example
    v-for="(elem, ind) in numbers"
    :key="ind"
    :title="elem"
    @handle="log"
  ></props-example> -->

  <product-cart
    v-for="product in products"
    :key="product.id"
    :id="product.id"
    :title="product.title"
    :price="product.price"
    @deleteProductById="deleteProductById"
  ></product-cart>
</template>

<script>
import Counter from './components/Counter.vue';
import UserList from './components/UserList.vue';
import PropsExample from './components/PropsExample.vue';
import ProductCart from './components/ProductCart.vue';


export default {
  components: {
    Counter,
    UserList,
    PropsExample,
    ProductCart
  },
  data() {
    return {
      numbers: ['Один', 'Два', 'Три'],
      products: [
          {id: 1, title: 'Item 1', price: 100},
          {id: 2, title: 'Item 2', price: 200},
          {id: 3, title: 'Item 3', price: 300},
          {id: 4, title: 'Item 4', price: 400}
        ]
    }
  },
  methods: {
    log(arg) {
      console.log('LOG!', arg)
    },
    deleteProductById(id) {
      let filteredProducts = this.products.filter(product => product.id !== id);
      this.products = filteredProducts;
    }
  }
}

</script>

<style></style>