<template>
  <div>
    <h1>Our products</h1>
    <div class="products-container">
      <div
        class="product-container"
        v-for="product in products"
        :key="product._id"
      >
        <ProductItem :product="product" />
      </div>
    </div>
    <div v-if="products.length === 0">
      <p>You don't have any contract</p>
      <router-link to="/our-prodcuts">
        <el-button type="info" round>Subscribe to a product now!</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/Product-item";
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    onSubmit() {}
  },
  mounted() {
    this.$http
      .get("http://localhost:3001/products")
      .then(response => {
        if (response.data) {
          this.products = response.data;
        }
      })
      .catch(err => {
        this.err = err.response.data.message;
      });
  },
  components: {
    ProductItem
  }
};
</script>

<style scoped lang="scss">
.products-container {
  display: flex;
  flex-direction: column;
  .product-container {
    flex: 1;
    margin: 1rem;
  }
}
</style>
