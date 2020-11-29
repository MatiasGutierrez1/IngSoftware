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






#app {
  
  width: 800px;
  margin: 60px auto;
  font-family: sans-serif;
  color: #213B4C;
  
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
 
  
  table {
    width: 100%;
    border-spacing: 0 0;
    background: #213B4C;
    color: white;
    box-shadow: 0 0 20px #1E3344;
    border-radius: 20px;
    overflow: hidden;
    
    
    th {
      background: #0C1E28;
      border: none;  
      margin: 0;
      padding: 0;
      text-align: left;
      padding: 20px 0px 20px 0px;
      
      
      &:first-of-type{
        padding: 0 30px 0 30px;
        text-align: center;
      }
      &:last-of-type{
        padding: 0 30px 0 30px;
      }
      
      &:nth-child(3), &:nth-child(4){
        text-align: center;
        cursor: pointer;
      }
    }
    
    tr {
      &:nth-child(2n+1) {
        background: #1E3344;
      }
      
      td {

        padding: 10px 0px;
        
        &:nth-child(1){
           padding: 10px 30px 10px 30px;
          text-align: center;
        }
        
        &:nth-child(3),&:nth-child(4){
          text-align: center;
        }
      }
      
      &:hover {
         background: #18A5FE;
      }
    }
  }
  
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
}

.none {
  visible: hidden;
  opacity: 0;
}

.user-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align:middle;
  margin-right: 10px;
}
</style>