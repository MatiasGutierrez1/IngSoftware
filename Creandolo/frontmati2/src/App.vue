<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      
      <b-container>

        <b-navbar-brand href="/">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
            <b-nav-item :to="{name: 'PremiosTrabajador'}">PremiosTrabajador</b-nav-item>
            <b-nav-item :to="{name: 'PremiosGestor'}">PremiosGestor</b-nav-item>
            <b-nav-item :to="{name: 'TareasTrabajador'}">TareasTrabajador</b-nav-item>
            <b-nav-item :to="{name: 'TareasPlanificador'}">TareasPlanificador</b-nav-item>
            <b-nav-item :to="{name: 'UsuariosPlanificador'}">UsuariosPlanificador</b-nav-item>
            <b-nav-item :to="{name: 'UsuariosGestor'}">UsuariosGestor</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

      </b-container>  
    
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
  body,
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #e0ddda;
    width: 100%;
    height: 100%;
  }
</style>