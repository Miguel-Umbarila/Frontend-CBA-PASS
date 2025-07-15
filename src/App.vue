<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li>
              <RouterLink to="/Inicio"> Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/form"> Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/usuario"> Usuario</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/inicio-sesion"> Sign-up</RouterLink>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Home</a></li>
                <li><a class="dropdown-item" href="#">Login</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign-up</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  background: red;
  padding: 1rem;
}

.logo {
  display: grid;
  border-radius: 20rem;
  width: 6rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
#logos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
}

nav {
  width: auto;
  height: auto;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  background: linear-gradient(to bottom, rgb(5, 155, 172, 255), rgb(123, 216, 88, 255));
}

nav a.router-link-exact-active {
  color: green;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
