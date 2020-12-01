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
          <b-nav-item :to="{name: 'TareasTrabajador'}">Tareas</b-nav-item>
          <b-nav-item :to="{name: 'RankingTrabajador'}">Ranking</b-nav-item>
          <b-nav-item :to="{name: 'PerfilTrabajador'}">Perfil</b-nav-item>
          <b-nav-item :to="{name: 'Login'}">Cerrar sesion</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    </b-container>
  </div>

  <b-container>
  <div class="py-3 bg-dark text-center">
    <b-row>
      <b-col cols="12" md="8">
        <p style="color: white">Nombre</p>
      </b-col>
      <b-col cols="12" md="1">
        <p style="color: white">Puntaje requerido</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-card 
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          >  
          <b-button variant="info" href="#">Descripción</b-button>
        </b-card>
        <b-col cols="12" md="2">
          <p>Premio 1</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>800</p>
        </b-col>
        <button>Canjear</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-card 
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          >  
          <b-button variant="info" href="#">Descripción</b-button>
        </b-card>
        <b-col cols="12" md="2">
          <p>Premio 2</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>450</p>
        </b-col>
        <button>Canjear</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-card 
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          >  
          <b-button variant="info" href="#">Descripción</b-button>
        </b-card>
        <b-col cols="12" md="2">
          <p>Premio 3</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>300</p>
        </b-col>
        <button>Canjear</button>
      </li>
    </ul>
  </div>
  </b-container>
  </body>
</template>

<script>
  export default {
    name: 'PremiosTrabajador'
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
