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
        <input type="text" class="form-control" placeholder="Nombre" />
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Apellido" />
      </div>
      <div class="mb-3">
        <label for="">Tipo Documento: </label>
        <select name="" class="opcion">
          <option value="1">C.C</option>
          <option value="2">T.I</option>
        </select>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Numero de Identidad" />
      </div>
      <div class="mb-3">
        <label for="">Rol:</label>
        <select name="" class="opcion">
          <option value="1">Adminstrador</option>
          <option value="2">Aprendiz</option>
        </select>
      </div>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Contraseña" />
      </div>
      <div class="mb-3">
        <input type="tel" class="form-control" placeholder="Celular" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="buton">
        <button type="submit" class="btn btn-success">Siguiente</button>
      </div>
      <div>
        <router-link to="/inicio-sesion">Ya tienes cuenta? Inicia Sesion</router-link>
      </div>
    </form>
  </div>
</template>

<script setup></script>
<script>
import axios from 'axios'
export default {
  name: 'formCba',
  data() {
    return {
      datos: {
        nombre: '',
        apellido: '',
        tipo_documento: '',
        numero_identidad: '',
        rol: '',
        email: '',
        password: '',
        celular: '',
      },
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/registro/datos-Usuario//')
      .then((response) => {
        this.datos = response.data
      })
      .catch((error) => {
        console.error('Error ', error)
      })
  },
}
</script>

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
  background: linear-gradient(to bottom, rgb(5, 155, 172, 255), rgb(123, 216, 88, 255));
}
#form #imag {
  width: 100%;
}
#form #imag img {
  width: 13rem;
  height: 13rem;
  padding-bottom: 8px;
  border-radius: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#form .mb-3 input {
  height: 2rem;
  font-size: larger;
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
