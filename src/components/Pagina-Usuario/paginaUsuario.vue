<template>
  <div class="contenido">
    <section id="caja">
      <div id="Generar-QR" class="mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" viewBox="0 0 24 24">
          <path
            d="M11 8h-1v-2h1v1h2v1h-1v1h-1v-1zm2 12v-1h-1v1h1zm-1-15v-1h-2v1h1v1h1v-1zm8-1v6h-1v-1h-4v-5h5zm-1 4v-3h-3v3h3zm-14 2h-1v1h2v-1h-1zm0 3h1v1h1v-3h-1v1h-2v2h1v-1zm5 1v2h1v-2h-1zm4-10h-1v3h1v-3zm0 5v-1h-1v1h1zm3-2h1v-1h-1v1zm-10-1h-1v1h1v-1zm2-2v5h-5v-5h5zm-1 1h-3v3h3v-3zm9 5v1h-1v-1h-2v1h-1v-1h-3v-1h-1v1h-1v1h1v2h1v-1h1v2h1v-2h3v1h-2v1h2v1h1v-3h1v1h1v2h1v-1h1v-1h-1v-1h-1v-1h1v-1h-2zm-11 8h1v-1h-1v1zm-2-3h5v5h-5v-5zm1 4h3v-3h-3v3zm12-3v-1h-1v1h1zm0 1h-1v1h-1v-1h-1v-1h1v-1h-2v-1h-1v2h-1v1h-1v3h1v-1h1v-1h2v2h1v-1h1v1h2v-1h1v-1h-2v-1zm-9-3h1v-1h-1v1zm10 2v1h1v1h1v-3h-1v1h-1zm2 4v-1h-1v1h1zm0-8v-1h-1v1h1zm-2-10h4v4h2v-6h-6v2zm-16 4v-4h4v-2h-6v6h2zm4 16h-4v-4h-2v6h6v-2zm16-4v4h-4v2h6v-6h-2z"
          />
        </svg>
        <h1><a href="">Generar QR</a></h1>
      </div>
      <div id="edit" class="mb-3">
        <router-link>
          <h1>
            <a href="">Editar Perfil</a>
          </h1>
        </router-link>
        <svg
          width="5rem"
          height="5rem"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <div id="Historial" class="mb-3">
        <h1><a href="">Historial</a></h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 24 24">
          <path
            d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12h2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.777 0-5.287 1.141-7.099 2.977l2.061 2.061-6.962 1.354 1.305-7.013 2.179 2.18c2.172-2.196 5.182-3.559 8.516-3.559 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z"
          />
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style>
/* Donde esta todo el contenido y para que sea sentrado */
.contenido {
  display: flex;
  justify-content: center;
  margin: 2rem;
}

/* Casja principal donde esta todas las img y links */
#caja {
  width: auto;
  border: 2px solid black;
  margin: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  border-radius: 20px;
  width: 25rem;
}

/* Seccion de la primera parte, donde es generar el codigo QR */
#Generar-QR {
  width: auto;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgb(5, 155, 172, 255), rgb(123, 216, 88, 255));
}
#Generar-QR svg {
  margin: 0 auto;
}
#Generar-QR h1 {
  text-align: center;
}
#Generar-QR h1 a {
  color: white;
}

/* Seccion de editar el perfil */
#edit {
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(to bottom, rgb(5, 155, 172, 255), rgb(123, 216, 88, 255));
}
#edit h1 {
  display: grid;
  place-items: center;
}
#edit h1 a {
  color: white;
}
#edit svg {
  margin: 0 auto;
}

/* Seccion de Historial */
#Historial {
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(to bottom, rgb(5, 155, 172, 255), rgb(123, 216, 88, 255));
}
#Historial h1 {
  width: 15rem;
  display: grid;
  place-items: center;
}
#Historial h1 a {
  color: white;
}
#Historial svg {
  margin: 0 auto;
}
</style>
