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

   <div class="row">
     <form  class="form-horizontal form-material">
       <div class="form-group">
         <label class="col-md-12">Nombre</label>
           <div class="col-md-12">
             <input type="text" class="form-control form-control-line"
               v-model="user.name">
             </div>
           </div>
           <div class="form-group">
             <label class="col-md-12">Apellido</label>
               <div class="col-md-12">
                 <input type="text" class="form-control form-control-line"
                   v-model="user.lastname">
               </div>
            </div>
            <div class="form-group">
              <label class="col-sm-12">Genero</label>
              <div class="col-sm-12">
                <select class="form-control form-control-line">
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Otra orientación</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-12">Sobre mi</label>
              <div class="col-md-12">
                <textarea rows="5" class="form-control form-control-line"
                 v-model="user.description">
                </textarea>
              </div>
            </div>
          <div class="col-sm-12">
            <button class="btn btn-success" 
              v-on:click="editUser()">Actualizar
            </button>
          </div>
      </form>
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