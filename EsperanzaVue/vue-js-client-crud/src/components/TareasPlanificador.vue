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

  <div class="py-5 bg-dark text-center">
    <b-container>
      <input type="text" class="form-control"></input>
    </b-container>
    <b-row>
      <b-col cols="12" md="2">
        <p>Trabajador</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Tarea</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Fecha de entrega</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Prioridad</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea2</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
    </ul>
  </div>  
  </body>
</template>

<script>
  export default {
    name: 'TareasPlanificador'
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
