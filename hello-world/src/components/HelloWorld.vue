<template lang="html">
  <div>
    <gallery :images="imageGallery" :index="index" @close="index = null"></gallery>
    <div v-if='!loading' class="list">
      <sui-card class='list-card' v-for="(list,imageIndex) in list"  @click="index = imageIndex" :key="imageIndex">
          <sui-image v-bind:src="list.download_url"/>
        <sui-card-content>
          <sui-card-header><a v-bind:href="list.url">{{list.author}}</a></sui-card-header>
        </sui-card-content>
      </sui-card>
    </div>
    <div v-else class='loading-circle'>
      <sui-loader size="large" active centered inline />
    </div>
  </div> 
</template>
<script>
import { mapState } from "vuex";
import VueGallery from "vue-gallery";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      images: [],
      index: null
    };
  },
  mounted() {
    this.$store.dispatch("loadList");
  },
  computed: {
    ...mapState(["list", "loading","imageGallery"]),
    imageGallery() {
      return this.$store.getters.imageGallery;
    }
  },
  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
.list {
  margin-top: 80px;
  margin-bottom: 40px;
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
  cursor: pointer;
}
.ui.image:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.loading-circle {
  height: 90vh;
  position: relative;
  top: 50vh;
}
</style>
