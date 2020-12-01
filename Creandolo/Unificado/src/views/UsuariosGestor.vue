<template>
  <div class="py-3 bg-success text-center">
    <b-container>
      <button>Agregar usuario</button>
      <input type="text" class="form-control"></input>
    </b-container>
    <b-row>
      <b-col cols="12" md="3">
        <p>Usuarios</p>
      </b-col>
      <b-col cols="12" md="5">
        <p>Puntajes</p>
      </b-col>
    </b-row>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 1</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>5000</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 2</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4630</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button> 
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 3</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4450</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 4</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>4110</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b-col cols="12" md="2">
          <p>Trabajador 5</p>
        </b-col>
        <b-col cols="12" md="4">
          <p>3800</p>
        </b-col>
        <button>Modificar</button>
        <button>Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'UsuariosGestor'
  }
</script>