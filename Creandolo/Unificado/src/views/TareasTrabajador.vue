<template>
  <div class="py-5 bg-success text-center">
    <b-row>
      <b-col cols="6" md="3">
        <p>Tarea</p>
      </b-col>
      <b-col cols="6" md="3">
        <p>Fecha de entrega</p>
      </b-col>
      <b-col cols="6" md="5">
        <p>Prioridad</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Prioridad</p>
        </b-col>
        <button>Entregar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Tarea2</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Prioridad</p>
        </b-col>
        <button>Entregar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="4">
          <p>Prioridad</p>
        </b-col>
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
