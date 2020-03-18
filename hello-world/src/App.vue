<template>
  <div id="app">
    <div>
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Footer,
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
