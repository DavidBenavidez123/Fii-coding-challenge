<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  position: fixed;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  height: 80px;
  width: 100%;
  z-index: 10;
  background-color: white;
}
</style>
