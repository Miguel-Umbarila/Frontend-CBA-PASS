<template>
  <div class="section">
    <section class="content">
      <div class="image-container">
        <img src="/public/prueba.jpg" alt="Imagen sobre quienes somos" class="image" />
      </div>
      <div class="text-container">
        <h1>¿Quiénes somos?</h1>
        <p>
          Somos una organización comprometida con la innovación y el acceso inteligente. Nuestro objetivo es brindar soluciones modernas y eficientes que mejoren la experiencia de todos los usuarios.
        </p>
      </div>
    </section>
  </div>

  <div class="section">
    <section class="content reverse">
      <div class="image-container">
        <img src="/public/prueba.jpg" alt="Imagen de CBA PASS" class="image" />
      </div>
      <div class="text-container">
        <h1>¿Por qué CBA PASS?</h1>
        <p>
          Porque creemos en la seguridad, accesibilidad y tecnología como pilares fundamentales para un acceso más eficiente y personalizado. CBA PASS conecta a las personas con soluciones reales.
        </p>
      </div>
    </section>
  </div>
</template>

<style>
/* DISEÑO GENERAL */
.section {
  width: 100%;
  padding: 4rem 1.5rem;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
  align-items: center;
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.content.reverse {
  flex-direction: row-reverse;
}

.image-container {
  flex: 1;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 1.5rem;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.text-container {
  flex: 1;
  text-align: left;
}

.text-container h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', serif;
  color: #212529;
}

.text-container p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
}

/* RESPONSIVO */
@media (max-width: 992px) {
  .content {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .content.reverse {
    flex-direction: column;
  }

  .text-container h1 {
    font-size: 1.8rem;
  }

  .text-container p {
    font-size: 1rem;
  }
}
</style>