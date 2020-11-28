<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      
      <b-container>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
            <b-nav-item :to="{name: 'TareasTrabajador'}">Tareas Trabajador</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

      </b-container>  
    
    </b-navbar>

    <container>
      <router-view/>
    </container>
  </div>
</template>

