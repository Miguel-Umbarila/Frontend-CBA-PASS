<template>
<div>
  <table class="table" >
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Correo</th>
        <th scope="col">Numero</th>

      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr>
        <th scope="row"></th>
        <td>miguelumbarila321@gmail.com</td>
        <td>3245334699</td>

      </tr>
      <tr>
        <th scope="row"></th>
        <td>jhonatan@mail.com</td>
        <td>3193831573</td>

      </tr>
      <tr>
        <th scope="row"></th>
        <td>Santiagocan@gmail.com</td>
        <td>3184450527</td>

      </tr>
      <tr>
        <th scope="row"></th>
        <td>santiagosalamanca@gmail.com</td>
        <td>3186129836</td>
      </tr>
    </tbody>
  </table>
  <div class="boton">
    <button>Descargar</button>
  </div>
</div>
</template>

<style>


#flutter{
    width: 100%;
    background: linear-gradient(to bottom, #59c3d3, #a1e891);
}
#filaUno{
    width: 50%;
}
#filaDos{
    width: 50%;
}

.boton{
  display: flex;
  justify-content: center;
  align-items: center;
}

.boton button{
  background: linear-gradient(to bottom, #59c3d3, #a1e891);
  height: 50px;
  width: 100px;
  border-radius: 20px;
}

</style>
