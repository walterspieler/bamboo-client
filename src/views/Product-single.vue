<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <div slot="header" class="header">
          <h1>{{ product.label }}</h1>
          <p>Subscribe for {{ product.price }}€/week</p>
        </div>
        <div class="text item">
          {{ product.description }}
        </div>
        <el-divider></el-divider>
        <div class="text item" v-for="cover in product.covered" :key="cover">
          {{ cover }}
        </div>
      </el-card>
      <ContractSubscription
        v-if="owner_id"
        class="contract-form"
        :product="product"
        :product_id="product_id"
        :owner_id="owner_id"
        @subscribe="subscribe"
      />
      <el-card v-if="!owner_id" class="contract-form">
        <div slot="header">
          <span>Connect or Create an account to subscribe</span>
        </div>
        <router-link to="/sign-up" round>
          <el-button round>Sign up</el-button>
        </router-link>
        <p>You already have an account?</p>
        <router-link to="/login" round>
          <el-button round>Login now</el-button>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
import ContractSubscription from "../components/Contract-subscription";
import Auth from "../services/auth.service";
export default {
  data() {
    return {
      product: {},
      owner_id: Auth.getCurrentUserId(),
      product_id: this.$route.params.id
    };
  },
  methods: {
    subscribe(contract) {
      this.$http.post("http://localhost:3002/contracts", { contract });
    }
  },
  mounted() {
    this.product_id = this.$route.params.id;
    this.$http
      .get(`http://localhost:3001/products/${this.$route.params.id}`)
      .then(response => {
        if (response.data) {
          this.product = response.data;
        }
      })
      .catch(err => {
        this.err = err.response.data.message;
      });
  },
  components: {
    ContractSubscription
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  .contract-form {
    flex: 1;
    margin: 0 1rem;
  }
  .box-card {
    flex: 3;
  }
}
</style>
