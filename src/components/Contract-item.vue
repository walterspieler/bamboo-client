<template>
  <div class="contract-container">
    <el-card class="box-card">
      <div slot="header" class="header">
        <img
          v-if="product.picture_url"
          :src="product.picture_url"
          :alt="product.label"
        />
        <span>{{ contract.model }} — for: {{ contract.beneficiary }} </span>
        <p>
          Subscribed on {{ displayDate(contract.subscription_date) }}, for only
          {{ product.price }}€/week
        </p>
      </div>
      <div class="text item">
        {{ product.description }}
      </div>
      <p>What my {{ product.label }} contract covers</p>
      <div class="text item" v-for="cover in product.covered" :key="cover">
        {{ cover }}
      </div>
      <el-divider></el-divider>
      <div>
        <p>You can unsubscribe anytime:</p>
        <el-button type="warning" round @click="submit(contract._id)"
          >Unsubscribe</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ContractItem",
  props: {
    contract: Object
  },
  data() {
    return {
      product: {}
    };
  },
  methods: {
    getLink(id) {
      return `/our-products/${id}`;
    },
    displayDate(date) {
      return moment(date).format("LL");
    },
    submit(id) {
      this.$emit("unsubscribe", id);
    }
  },
  mounted() {
    this.$http
      .get(`http://localhost:3001/products/${this.contract.product_id}`)
      .then(response => {
        if (response.data) {
          this.product = response.data;
        }
      });
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
