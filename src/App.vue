<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <img src="/public/cpas.png" alt="" class="logo" />
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
    </header>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding-left: 3rem;
}

.logo {
  display: flex;
  margin: 3rem;
  border-radius: 20rem;
  width: 7rem;
}

nav {
  width: 100%;
  height: 6rem;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  justify-content: space-around;
}

nav a.router-link-exact-active {
  color: green;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
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
