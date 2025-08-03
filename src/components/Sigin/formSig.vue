<template>
  <div class="formulario">
    <form id="form">
      <div id="imag">
        <img src="/public/cpas.png" alt="" />
      </div>
      <div id="cbapass">
        <h1>CBA PASS</h1>
      </div>
      <div class="mb-3">
        <label for="">Tipo Documento: </label>
        <select name="" class="opcion">
          <option value="1">C.C</option>
          <option value="2">T.I</option>
        </select>
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Numero de Identidad"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
      </div>
      <div class="buton">
        <button type="button" class="btn btn-success">Ingresar</button>
      </div>
      <div>
        <!-- <a href="">Ya tienes cuenta? Inicia Sesion</a> -->
        <router-link to="/form">No te has Registrado? Registrate</router-link>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style>
.formulario {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
#form {
  border: 2px solid black;
  border-radius: 50px;
  padding: 2rem;
  width: 40rem;
}
#form #imag {
  width: 100%;
}
#form #imag img {
  width: 15rem;
  height: 15rem;
  padding-bottom: 8px;
  border-radius: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#form .mb-3 input {
  font-size: larger;
}
.form-check-input {
  height: 2rem;
  width: 2rem;
  margin: 10px;
}
#cbapass {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #11856a;
  text-align: center;
}
.opcion {
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}
#form .buton {
  width: 90%;
}
.buton {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
-->
