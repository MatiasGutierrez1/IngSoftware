const app = new Vue({
    el: '#app',
    data: {
      saludo: 'soy ciclo de vida',
    },
    beforeCreate(){
      console.log('beforeCreate');
    }
})