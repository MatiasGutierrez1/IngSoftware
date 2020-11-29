<template>
  <div class="py-3 bg-success text-center">
    <b-row>
      <b-col cols="12" md="7">
        <p>Nombre</p>
      </b-col>
      <b-col cols="12" md="4">
        <p>Puntaje requerido</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-card 
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          >  
          <p>Premio</p>
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
          <p>Premio</p>
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
          <p>Premio</p>
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
</template>

<script>
  export default {
    name: 'PremiosTrabajador'
  }
</script>
