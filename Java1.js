const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue',
    frutas: [
      {nombre: 'Pera', cantidad:5},
      {nombre: 'Manzana', cantidad:0},
      {nombre: 'Platano', cantidad:3}
    ],
    nuevaFruta: ''
  },
  methods:{
    agregarFruta (){
      console.log("diste click")
    },
  }
})
