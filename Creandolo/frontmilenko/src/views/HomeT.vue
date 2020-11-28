<template>
<body class="fondo">
  <div class="home">
    <navigation/>
    <h1>Home</h1>
    <p v-if="userLogged">User loggued: {{userLogged}}</p>
  </div>
</body>
</template>

<script>
import Navigation from "../components/Navigation";
import auth from "@/confirmar/auth";
export default {
  name: "Home",
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style lang="scss" scoped>
.fondo{
  background-size: 100px 100px;
  background-size: 100% 100%;
  background-image: url("backgraund.jpg");
  background-color: #ffffff;

}
</style>