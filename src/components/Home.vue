<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      We cover all makes and models If you have an older phone, you don't need
      to worry. We also cover older models, as long as your phone is less than 3
      years old and was bought as new. Not only do we provide insurance for all
      popular manufacturers in the industry, such as Apple, Samsung, Sony and
      Google, but we also cover lesser known manufacturers including Getac,
      Sonim and many more. We offer affordable and competitive prices on the
      latest models including iPhone 11, Samsung S10 and iPhone Xr.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
