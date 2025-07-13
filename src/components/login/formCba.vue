<template>
    <div class="formulario">
        <form id="form">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Apellido">
            </div>
            <div class="mb-3">
                <label for="">Tipo Documento: </label>
                <select name="" class="opcion" >
                    <option value="1">C.C</option>
                    <option value="2">T.I</option>
                </select>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Numero de Identidad">
            </div>
            <div class="mb-3">
                <label for="">Rol:</label>
                <select name="" class="opcion" >
                    <option value="1">Adminstrador</option>
                    <option value="2">Aprendiz</option>
                </select>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
            </div>
            <div class="mb-3">
                <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="Celular">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="button" class="btn btn-success">Enviar</button>
        </form>
    </div>
</template>

<script>


</script>

<style>
.formulario{
    display: flex;
    justify-content: center; 
    padding: 5rem;   
}
#form{
    border: 2px solid black;
    border-radius: 10px;
    padding: 2rem;
    width: 40rem;
}
.opcion{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#form .btn{
    position: relative;
    align-items: center;
}



</style>
