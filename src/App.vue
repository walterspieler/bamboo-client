<template>
  <el-container id="app">
    <el-header id="nav" height="auto">
      <img alt="Bamboo®" src="./assets/logo-01.png" />
      <el-menu
        :router="true"
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
      >
        <el-menu-item index="/">Bamboo</el-menu-item>
        <el-menu-item index="/our-products">Our products</el-menu-item>
        <el-menu-item index="/sign-up" v-if="!isAuth()">Sign up</el-menu-item>
        <el-menu-item index="/your-contracts" v-if="isAuth()"
          >Your contracts</el-menu-item
        >
      </el-menu>
      <div class="spacer"></div>
      <router-link to="/login" round v-if="!isAuth()">
        <el-button round>Login</el-button>
      </router-link>
      <router-link to="/logout" round v-if="isAuth()">
        <el-button round>Logout</el-button>
      </router-link>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  min-height: 100vh;
  background: #efefef;
}
#app {
  font-family: "Avenir", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: auto;
  padding: 1rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    display: block;
    max-height: 55px;
    margin: 0.5rem;
  }
  .spacer {
    flex: 1;
  }
  .el-menu {
    margin: 0 2rem;
    border-bottom: 0;
  }
}
</style>

<script>
import Auth from "./services/auth.service";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    isAuth() {
      return Auth.checkAuth();
    }
  }
};
</script>
