<template>

  <body class="fondo">
  <img alt="Vue logo" src="./logo.png" class="logo">

  <div>
    <b-container>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'HomeT'}">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="{name: 'PremiosTrabajador'}">Premio</b-nav-item>
        <b-nav-item :to="{name: 'TareasPlanificador'}">Tareas</b-nav-item>
        <b-nav-item :to="{name: 'RankingPlanificador'}">Ranking</b-nav-item>
        <b-nav-item href="#" disabled>Perfil</b-nav-item>
        <b-nav-item :to="{name: 'UsuariosPlanificador'}">Usuarios</b-nav-item>
        <b-nav-item :to="{name: 'Login'}">Cerrar sesion</b-nav-item>
      </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    </b-container>
  </div>

  <b-container>
  <div class="py-3 bg-dark text-center">
    <div>
        <input type="text" id="searchterm" placeholder="Usuario">
        <button type="button" id="search">Buscar Usuario</button>
    </div>
    <b-row>
      <b-col cols="12" md="6">
        <p style="color:white">Usuarios</p>
      </b-col>
      <b-col cols="12" md="6">
        <p style="color:white">Puntajes</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="6">
          <p>Trabajador 1</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>5000</p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="6">
          <p>Trabajador 2</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>4630</p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="6">
          <p>Trabajador 3</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>4450</p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="6">
          <p>Trabajador 4</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>4110</p>
        </b-col>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="6">
          <p>Trabajador 5</p>
        </b-col>
        <b-col cols="12" md="6">
          <p>3800</p>
        </b-col>
      </li>
    </ul>
  </div>
  </b-container>
  </body>
</template>

<script>
  export default {
    name: 'UsuariosPlanificador'
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

    table {
    width: 70%;
    border-spacing: 0 0;
    background: #22333f;
    color: white;
    border-radius: 5px;
    overflow: hidden;
  } 
  
</style>
