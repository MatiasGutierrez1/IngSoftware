<template>
  <div class="py-5 bg-success text-center">
    <h4>Tarea     Fecha de entrega      Prioridad </h4>
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