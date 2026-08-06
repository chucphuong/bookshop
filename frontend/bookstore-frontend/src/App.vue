<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="main-content">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #f8fafc;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
</style>
