<template>
  <header>
    <TheNavBar>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/calculation">Cálculos</RouterLink>
      <RouterLink to="/registration">Registro</RouterLink>
    </TheNavBar>
  </header>
  <main data-v-7a7a37b1 style="margin-bottom: 120px;">
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
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 5rem;
  flex-direction: row;
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 5px;
    text-align: center;
  }

  .logo {
    margin: 0 2rem 0 0;

  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: auto;
  }
}
</style>