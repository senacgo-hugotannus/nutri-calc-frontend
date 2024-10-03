<template>
  <header>
    <div class="wrapper">
      <MainPage title="Nutri Calc" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
        <RouterLink to="/calculation">Cálculos</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
    <h2>Cálculos Nutri Calc</h2>  
    <p> IMC: <span class="Kg">{{IMCView}}</span></p>    
    <p> TMB (EHB): <span class="Kcal">{{tmbView}}</span></p>
    <p> Gasto Energético: <span class="Kcal">{{fatorAtividadeView}}</span></p> 
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheMainPage from './components/TheMainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage: TheMainPage,
    RouterLink,
    RouterView
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
  .Kg::after{
    padding: 5px;
    content: "Kg/m²";
   }

   .Kcal::after{
    padding: 5px;
    content: "Kcal";
   }

}
</style>
