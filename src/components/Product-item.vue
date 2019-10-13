<template>
  <div class="product-container">
    <el-card class="box-card">
      <div slot="header" class="header">
        <img
          v-if="product.picture_url"
          :src="product.picture_url"
          :alt="product.label"
        />
        <span>{{ product.label }}</span>
        <router-link :to="getLink(product._id)">
          <el-button round> Subscribe for {{ product.price }}€/week</el-button>
        </router-link>
      </div>
      <div class="text item">
        {{ product.description }}
      </div>
      <el-divider></el-divider>
      <div class="text item" v-for="cover in product.covered" :key="cover">
        {{ cover }}
      </div>
      <el-divider></el-divider>
      <router-link :to="getLink(product._id)">
        <el-button round
          >Know more about {{ product.label }} contract</el-button
        >
      </router-link>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object
  },
  methods: {
    getLink(id) {
      return `/our-products/${id}`;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    display: block;
    max-width: 25px;
    margin-right: 0.5rem;
  }
  span {
    flex: 1;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
  }
}
</style>
