<template>
  <header>
    <TheNavBar>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/calculation">Cálculos</RouterLink>
      <RouterLink to="/registration">Registro</RouterLink>
    </TheNavBar>
  </header>
  <main>
    <NCContainer>
      <RouterView />
    </NCContainer>
  </main>
  <TheFooter/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NCContainer from './components/NCContainer.vue'
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    NCContainer,
    TheNavBar,
    TheFooter,
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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
    position: fixed;
    top: 0;
    text-align: center;
  }

  .logo {
    margin: 0 2rem 0 0;
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
