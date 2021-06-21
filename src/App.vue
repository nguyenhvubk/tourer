<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <the-header />
  <p class="card-header-title">
  </p>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #f7fcff !important;
}
/* img {
  height: 100% !important; 
  width: 100% !important;
  object-fit: cover;
} */
/* #app { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 30px; */
/* } */
</style>
