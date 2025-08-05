<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg position-relative">
      <div id="logos">
        <img src="/public/cpas.png" alt="" class="logo" />
        <h5>CBA PASS</h5>
      </div>

      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav links-centrales">
            <li class="nav-item">
              <router-link to="/inicio">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usuario">Usuario</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/inicio-sesion">Sign-up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

.logo {
  border-radius: 20rem;
  width: 6rem;
}

#logos {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
}

#logos h5 {
  color: white;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

nav {
  width: 100%;
  font-size: 14px;
  background: linear-gradient(to bottom, #59c3d3, #a1e891);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  padding: 1rem;
  position: relative;
}

nav a.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #00363a;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #ffffff;
}

/* Centramos los links exactamente en el centro horizontal */
.links-centrales {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
