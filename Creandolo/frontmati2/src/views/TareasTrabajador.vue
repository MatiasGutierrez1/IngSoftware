<template>
  <div class="py-5 bg-success text-center">
    <b-row>
      <b-col cols="1" md="1">
        <p>Tarea</p>
      </b-col>
      <b-col cols="1" md="4">
        <p>Fecha de entrega</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Tarea 1    <p></p>     Fecha de entrega     <p></p>      Prioridad
        <button>Entregar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Tarea 2    <p></p>      Fecha de entrega    <p></p>       Prioridad
        <button>Entregar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Tarea 3    <p></p>      Fecha de entrega    <p></p>       Prioridad
        <button>Entregar</button>
      </li>
    </ul>
  </div>  
</template>

<script>
  export default {
    name: 'TareasTrabajador'
  }
</script>