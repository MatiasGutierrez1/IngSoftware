<template>

<body class="fondo">
<img alt="Vue logo" src="./logo.png" class="logo">

<div>
  <b-container>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{name: 'HomeG'}">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'PremiosGestor'}">Premio</b-nav-item>
        <b-nav-item :to="{name: 'TareasGestor'}">Tareas</b-nav-item>
        <b-nav-item :to="{name: 'RankingGestor'}">Ranking</b-nav-item>
        <b-nav-item :to="{name: 'PerfilGestor'}">Perfil</b-nav-item>
        <b-nav-item :to="{name: 'UsuariosGestor'}">Usuarios</b-nav-item>
        <b-nav-item :to="{name: 'Login'}">Cerrar sesion</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
  </b-container>
</div>


</body>
</template>

<script>
  import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon } from 'mdbvue';
  export default {
    name: 'HamburgerMenuPage',
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbContainer,
      mdbRow,
      mdbInput,
      mdbNavbarBrand,
      mdbIcon
    }
  }
</script>
<style lang="scss" scoped>

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