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
<br> <br>
  <b-container>
  <div class="py-4 bg-dark text-center">

    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>        
        <b-col cols="6" md="2">
          <p>Nombre:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Juan</p>
        </b-col>
                <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p>E-mail:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>prueba@gmail.com</p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Telefono:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>+56921384521</p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Rut:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>12.356.345-k</p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Puntos:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>1456824</p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Puntos:</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>1456824</p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
        <b-col cols="6" md="2">
          <p><button>Editar Perfil</button></p>
        </b-col>
        <b-col cols="6" md="4">
          <p><button>Registro de Puntos</button></p>
        </b-col>
        <b-col cols="6" md="4">
          <p><button>Cambiar Contraseña</button></p>
        </b-col>
        <b-col cols="6" md="2">
          <p></p>
        </b-col>
      </li>
    </ul>
  </div>  
  </b-container>
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