<template>
  <div class="py-5 bg-success text-center">
    <b-container>
      <input type="text" class="form-control"></input>
    </b-container>
    <b-row>
      <b-col cols="12" md="2">
        <p>Trabajador</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Tarea</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Fecha de entrega</p>
      </b-col>
      <b-col cols="12" md="2">
        <p>Prioridad</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea2</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="6" md="2">
          <p>Trabajador</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Tarea1</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Fecha de entrega</p>
        </b-col>
        <b-col cols="6" md="2">
          <p>Prioridad</p>
        </b-col>
        <button>Confirmar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
    </ul>
  </div>  
</template>

<script>
  export default {
    name: 'TareasPlanificador'
  }
</script>
