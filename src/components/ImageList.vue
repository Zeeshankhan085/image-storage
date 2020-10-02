<template>
  <div>
    <div v-if="isLoggedIn" class="image-list">
      <ImageItemApp
        v-for="(image, index) in allImages"
        :key="index"
        :image="image"
        :index="index"
      ></ImageItemApp>
    </div>
    <h2 v-else>Log In to get started!</h2>
  </div>
</template>

<script>
import ImageItemApp from "./ImageItemApp.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    ImageItemApp
  },
  computed: { ...mapGetters(["allImages", "isLoggedIn"]) },
  methods: { ...mapActions(["fetchImages"]) },
  created() {
    this.fetchImages();
  },
  watch: {
    allImages: function() {
      this.fetchImages();
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
li {
  border-radius: 4px;
}

.image-list {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-template-rows: repeat(8, 250px);
  grid-gap: 15px;
}
</style>
