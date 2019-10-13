<template>
  <div class="home">
    <el-card>
      <div slot="header">
        <img alt="Home" src="../assets/logo-02.png" />
      </div>
      <Home msg="Protect your phone from 1€ a week!" />
      <router-link to="/sign-up">
        <el-button round>Start now</el-button>
      </router-link>
    </el-card>
    <p>You already have an account?</p>
    <router-link to="/login" round>
      <el-button round>Login now</el-button>
    </router-link>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>

<style scoped>
img {
  width: 350px;
}
</style>
