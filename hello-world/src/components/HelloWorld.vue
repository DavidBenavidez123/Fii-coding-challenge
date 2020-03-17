<template lang="html">
  <div class="list">
    <sui-card class='list-card' v-for="list in list" :key="list.id">
      <a v-bind:href="list.download_url"><sui-image v-bind:src="list.download_url"/></a>
      <sui-card-content>
        <sui-card-header><a v-bind:href="list.url">{{list.author}}</a></sui-card-header>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    list: Array
  },
  mounted() {
    this.$store.dispatch("loadList");
  },
  computed: {
    ...mapState([
      "list"
      ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list-card.ui.card {
  margin: 20px;
}
.ui.image {
  width: 290px;
  height: 193px;
  object-fit: contain;
  background-color: #fdfbf2;
  transition: box-shadow 0.5s;
}
.ui.image:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
