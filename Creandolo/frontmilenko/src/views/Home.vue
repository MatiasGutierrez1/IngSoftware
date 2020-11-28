<template>
<body class="fondo">
  <div class="login">
    <h1 class="title">Inicio de sesion</h1>
    <form action class="form">
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</body>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
    }
  }
};



</script>

<style lang="scss" scoped>

.fondo{
  background-size: 100px 100px;
  background-size: 100% 100%;
 background-image: url("backgraund.jpg");
 background-color: #ffffff;

}
.login {
  padding: 5rem;
  
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(235, 235, 235, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(226, 221, 221, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: rgb(153, 76, 140);
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 2px solid rgb(140, 51, 175);
  color: rgb(12, 2, 2);
  &:focus {
    outline: 0;
    border-color: #513fee;
  }
}
.form-submit {
  background: #941bac;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #513fee;
  }
}
</style>