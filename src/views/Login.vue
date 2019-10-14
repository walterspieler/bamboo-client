<template>
  <div>
    <h1>Sign in</h1>
    <el-card class="box-card">
      <div slot="header" class="header">
        <p>Retrieve and manage all your contracts</p>
      </div>
      <div class="text item">
        <el-form v-if="showForm" ref="form" :model="form">
          <el-form-item label="Your email address">
            <el-input v-model="form.email" type="email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit(form)">Sign in</el-button>
        </el-form>
        <el-form v-if="showOTPForm" ref="form" :model="OTPForm">
          <el-form-item label="OTP">
            <el-input v-model="form.otp" type="Password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmitOTP(form)"
            >Verify</el-button
          >
        </el-form>
      </div>
      <el-alert v-if="err" :title="err" type="error" show-icon></el-alert>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      OTPForm: {
        otp: ""
      },
      err: null,
      showForm: true,
      showOTPForm: false,
      currentuserID: ""
    };
  },
  methods: {
    onSubmit(form) {
      this.$http
        .post("http://localhost:3000/users/login", { ...form })
        .then(response => {
          if (response.data) {
            this.currentuserID = response.data;
            this.showForm = false;
            this.showOTPForm = true;
          }
        })
        .catch(err => {
          this.err = err.response.data.message;
        });
    },
    onSubmitOTP(form) {
      this.$http
        .post(`http://localhost:3000/users/login/${this.currentuserID}`, {
          ...form
        })
        .then(response => {
          localStorage.setItem("token", response.data);
          this.$router.push("/your-contracts");
        })
        .catch(err => {
          this.err = err.response.data.message;
        });
    }
  }
};
</script>
