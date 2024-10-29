<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/random-facts">Random Facts</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  background-color: antiquewhite;
  text-align: center;
  padding: 100px;
  font-size:x-large;
}

nav {
  margin-bottom: 20px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: underline;
  color: blue;
}

nav a.router-link-active {
  font-weight: bold;
  color: darkblue;
}
</style>
