<template>
  <div class="home">
    <div v-if="contracts.length > 0">
      <div
        class="contract-container"
        v-for="contract in contracts"
        :key="contract._id"
      >
        <ContractItem :contract="contract" @unsubscribe="removeContract" />
      </div>
    </div>
    <div v-else>
      <p>No contracts to display. Please subscribe to a contract:</p>
      <router-link to="/our-products" round>
        <el-button round>View our products</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ContractItem from "../components/Contract-item";
import Auth from "../services/auth.service";
export default {
  name: "contracts",
  components: {
    ContractItem
  },
  data() {
    return {
      contracts: []
    };
  },
  methods: {
    removeContract(id) {
      this.$http.delete(`http://localhost:3002/contracts/${id}`).then(() => {
        const index = this.contracts.findIndex(c => c._id === id);
        this.contracts.splice(index, 1);
      });
    }
  },
  mounted() {
    this.$http
      .get(`http://localhost:3002/contracts`, {
        headers: Auth.getAuthHeader()
      })
      .then(response => {
        if (response.data) {
          this.contracts = response.data;
        }
      })
      .catch(err => {
        this.err = err.response.data.message;
      });
  }
};
</script>

<style scoped lang="scss">
img {
  width: 350px;
}
.contract-container {
  margin-bottom: 1rem;
}
</style>
