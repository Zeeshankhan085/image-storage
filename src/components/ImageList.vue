<template>
  <div v-if="isLoggedIn" class="image-list">
    <li v-for="(image, index) in allImages" :key="index">
      <img :src="image.link" alt />
    </li>
  </div>
  <h2 v-else>Log In to get started!</h2>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["allImages", "isLoggedIn"]) },
  methods: { ...mapActions(["fetchImages"]) },
  created() {
    this.fetchImages();
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

img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.image-list {
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
</style>
