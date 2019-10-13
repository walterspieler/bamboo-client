<template>
  <div>
    <h1>Sign up</h1>
    <el-card class="box-card">
      <div slot="header" class="header">
        <p>Get started within a minute with Bamboo insurance.</p>
      </div>
      <div class="text item">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="First name">
            <el-input v-model="form.first_name"></el-input>
          </el-form-item>
          <el-form-item label="Last name">
            <el-input v-model="form.last_name"></el-input>
          </el-form-item>
          <el-form-item label="Your email address">
            <el-input v-model="form.email" type="email"></el-input>
          </el-form-item>
          <el-form-item label="Your phone number">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="onSubmit()"
          >Create my account
        </el-button>
      </div>
      <el-alert v-if="err" :title="err" type="error" show-icon> </el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      err: null,
      form: {
        email: "",
        phone: "",
        password: "",
        last_name: "",
        first_name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$http
        .post(`http://localhost:3000/users`, {
          user: { ...this.form },
          password: this.form.password
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          this.err = err.response.data.message || err.response.data.errmsg;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.text {
  margin-bottom: 1rem;
}
</style>
