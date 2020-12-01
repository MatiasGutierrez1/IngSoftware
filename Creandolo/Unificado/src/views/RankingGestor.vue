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
        <b-nav-item :to="{name: 'TareasGestor'}">Tareas</b-nav-item>
        <b-nav-item :to="{name: 'RankingGestor'}">Ranking</b-nav-item>
        <b-nav-item :to="{name: 'PerfilGestor'}">Perfil</b-nav-item>
        <b-nav-item :to="{name: 'UsuariosGestor'}">Usuarios</b-nav-item>
        <b-nav-item :to="{name: 'Login'}">Cerrar sesion</b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>



 <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Pagina Actual: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>



</body>
</template>

<script>


export default {
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        items: [
          { Ranking: 1, Nombre: 'Fred', Apellido: 'Flintstone' , Puntos: 134214},
          { Ranking: 2, Nombre: 'Wilma', Apellido: 'Flintstone', Puntos: 134214 },
          { Ranking: 3, Nombre: 'Barney', Apellido: 'Rubble', Puntos: 134214 },
          { Ranking: 4, Nombre: 'Betty', Apellido: 'Rubble', Puntos: 134214 },
          { Ranking: 5, Nombre: 'Pebbles', Apellido: 'Flintstone', Puntos: 134214 },
          { Ranking: 6, Nombre: 'Bamm Bamm', Apellido: 'Rubble', Puntos: 134214 },
          { Ranking: 7, Nombre: 'The Great', Apellido: 'Gazzoo', Puntos: 134214 },
          { Ranking: 8, Nombre: 'Rockhead', Apellido: 'Slate', Puntos: 134214 },
          { Ranking: 9, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 10, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 11, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 12, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 13, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 14, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
          { Ranking: 15, Nombre: 'Pearl', Apellido: 'Slaghoople', Puntos: 134214 },
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
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




 
  
  table {
    width: 70%;
    border-spacing: 0 0;
    background: #22333f;
    color: white;
    border-radius: 5px;
    overflow: hidden;
    
  }
  

</style>