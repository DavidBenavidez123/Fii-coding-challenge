<template>
  <div id="app">
    <div>
      <HelloWorld :list="list" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    axios
      .get("https://picsum.photos/v2/list")
      .then(res => {
        this.list = res.data;
        console.log("List", this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      list: []
    };
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
  margin-top: 60px;
}
</style>
