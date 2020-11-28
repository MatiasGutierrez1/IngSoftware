<template>
  <div class="mt-5">
    <b-button variant="success">Texto del botón</b-button>
    <b-button variant="info">Texto del botón</b-button>
    <b-button variant="danger">Texto del botón</b-button>

    <b-row>
      <b-col cols="12" md="4">
        
        <b-card 
        img-src="https://picsum.photos/600/300/?image=25"
        img-top
        >  
        <p>Lorem ipsum</p>
        <b-button variant="info" href="#">Descripción</b-button>
        </b-card>

      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Cards'
  }
</script>