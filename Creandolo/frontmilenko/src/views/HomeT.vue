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
import auth from "@/confirmar/auth";
export default {
  name: "Home",
  components: {
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
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






/*-------------------------
  The menu
--------------------------*/
nav{
  display:inline-block;
  margin:60px auto 45px;
  background-color:#5597b4;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}
nav a{
  display:inline-block;
  padding: 18px 30px;
  color:#fff !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;

  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

nav a:first-child{
  border-radius:2px 0 0 2px;
}

nav a:last-child{
  border-radius:0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact{
  background-color:#e35885;
}

p{
  font-size:22px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}

.resource {
  margin: 20px 0;
}
/*-------------------------
  fin The menu
--------------------------*/
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