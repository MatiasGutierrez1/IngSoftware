<template>

<body class="fondo">
<img alt="Vue logo" src="./logo.png" class="logo">
 
<section class="container-fluid slider d-flex justify-content-center aling-items-center">
  <h1 class="display-4"> Boostrap 4! </h1>
</section>

<div class="container">
<nav class="navbar navbar-inverse bg-inverse">
  <a class="navbar-brand" href="">
    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
  </a>
</nav>
</div>


    <p v-if="userLogged">User loggued: {{userLogged}}</p>


</body>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  computed: {

  }
};


</script>

<style lang="scss" scoped>

*{
  margin:0;
  padding:0;
}
body{
  font:15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align:center;
}
a, a:visited {
  outline:none;
  color:#389dc1;
}
a:hover{
  text-decoration:none;
}
section, footer, header, aside, nav{
  display: block;
}

.logo {
  max-width: 20%;
  float: left;

}
.fondo{
  background-size: 100px 100px;
  background-size: 100% 100%;
  background-image: url("backgraund.jpg");
  background-color: #ffffff;
}
</style>