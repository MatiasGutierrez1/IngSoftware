<template>

  <body class="fondo">
  <img alt="Vue logo" src="./logo.png" class="logo">

  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{name: 'HomeT'}">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'PremiosTrabajador'}">Premio</b-nav-item>
          <b-nav-item :to="{name: 'TareasTrabajador'}">Tareas</b-nav-item>
          <b-nav-item :to="{name: 'RankingTrabajador'}">Ranking</b-nav-item>
          <b-nav-item href="#" disabled>Perfil</b-nav-item>
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
          { Tarea: 1, FechaEntrega: '30 de Noviembre', Prioridad: 'Alta'},
          { Tarea: 2, FechaEntrega: '5 de Diciembre', Prioridad: 'Alta'},
          { Tarea: 3, FechaEntrega: '7 de Diciembre', Prioridad: 'Media'},
          { Tarea: 4, FechaEntrega: '15 de Diciembre', Prioridad: 'Media'},
          { Tarea: 5, FechaEntrega: '22 de Diciembre', Prioridad: 'Media'},
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
