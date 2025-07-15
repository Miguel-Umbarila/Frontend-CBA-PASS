<template>
  <div class="infromacion-uno">
    <section class="row" id="filaUno">
      <div class="col-6">
        <img src="/public/prueba.jpg" alt="" id="imagenUno" />
      </div>
      <div class="col-6" id="textUno">
        <h1>Quienes somos?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nisi laborum dignissimos
          perferendis ad ut eligendi ipsa beatae commodi labore id, eveniet magni, enim sint
          cupiditate nobis libero nihil culpa!
        </p>
      </div>
    </section>
  </div>
  <div class="infromacionDos">
    <section class="row" id="filaDos">
      <div class="col-6" id="textDos">
        <h1>Porque CBA PASS?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis provident culpa
          facere illum iure molestiae sint error, pariatur sapiente cumque voluptates consequuntur
          hic eveniet asperiores labore amet dolore sit!
        </p>
      </div>
      <div class="col-6">
        <img src="/public/prueba.jpg" alt="" id="imagenDos" />
      </div>
    </section>
  </div>
</template>

<style>
.infromacion-uno {
  padding: 3rem;
  width: 100%;
  position: static;
  justify-content: center;
  align-items: center;
}
.infromacion-uno #filaUno {
  border: 2px solid black;
  border-radius: 50px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-between;
  width: 70rem;
  align-items: center;
}
#imagenUno {
  width: 30rem;
  height: 25rem;
  border-radius: 20px;
}
#textUno {
  height: 20rem;
  width: 30rem;
  position: relative;
  text-align: center;
}
#textUno h1 {
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 6rem;
}

/* segunda seccion */
.infromacionDos {
  padding: 3rem;
  width: 100%;
  position: static;
  justify-content: center;
  align-items: center;
}
.infromacionDos #filaDos {
  border: 2px solid black;
  border-radius: 50px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-between;
  width: 70rem;
  align-items: center;
}
#imagenDos {
  width: 30rem;
  height: 25rem;
  border-radius: 20px;
}
#textDos {
  width: 30rem;
  height: 20rem;
  position: relative;
  text-align: center;
}
#textDos h1 {
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 6rem;
}
</style>
