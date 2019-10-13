<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="header">
        <h1>OneClick Subscribe to this offer</h1>
      </div>
      <div class="text item">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Name of the beneficiary">
            <el-input v-model="form.beneficiary" required></el-input>
          </el-form-item>
          <el-form-item label="Your phone Model">
            <el-select
              v-model="form.model"
              required
              placeholder="Please select the model you wan't to protect"
            >
              <el-option label="Iphone 14" value="Iphone 14"></el-option>
              <el-option label="Pixel XL 5" value="Pixel XL 5"></el-option>
              <el-option
                label="Iphone Pro XX"
                value="Iphone Pro XX"
              ></el-option>
              <el-option label="Samsung 23" value="Samsung 23"></el-option>
            </el-select>
          </el-form-item>
          <el-button round type="info" @click="onSubmit(form)"
            >Subscribe for only {{ product.price }}€ a week.</el-button
          >
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ContractSubscriptoon",
  props: {
    product: Object,
    owner_id: String,
    product_id: String
  },
  data() {
    return {
      form: {
        model: "",
        beneficiary: "",
        owner_id: this.owner_id,
        product_id: this.product_id
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$emit("subscribe", form);
    }
  }
};
</script>
