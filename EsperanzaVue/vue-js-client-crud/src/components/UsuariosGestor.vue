<template>
  <body class="fondo">
  <img alt="Vue logo" src="./logo.png" class="logo">

  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'HomeG'}">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'PremiosGestor'}">Premio</b-nav-item>
          <b-nav-item :to="{name: 'TareasTrabajador'}">Tareas</b-nav-item>
          <b-nav-item href="#" disabled>Ranking</b-nav-item>
          <b-nav-item href="#" disabled>Perfil</b-nav-item>
          <b-nav-item :to="{name: 'UsuariosGestor'}">Usuarios</b-nav-item>
          <b-nav-item :to="{name: 'Login'}">Cerrar sesion</b-nav-item>
        </b-navbar-nav>


      </b-collapse>
    </b-navbar>
  </div>

  <div class="py-3 bg-dark text-center">
    <b-container>
      <button>Agregar usuario</button>
      <input type="text" class="form-control"></input>
    </b-container>
    <b-row>
      <b-col cols="12" md="3">
        <p>Usuarios</p>
      </b-col>
      <b-col cols="12" md="5">
        <p>Puntajes</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 1</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>5000</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 2</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4630</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button> 
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 3</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4450</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 4</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4110</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 5</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>3800</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
    </ul>
  </div>
  </body>
</template>

<script>
  export default {
    name: 'UsuariosGestor'
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