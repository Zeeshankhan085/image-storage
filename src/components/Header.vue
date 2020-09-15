<template>
  <div>
    <div class="ui secondary pointing menu">
      <a class="active item">Image Storage</a>

      <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
          <router-link class="item" to="/">Galleries</router-link>
          <router-link class="item" to="upload">Upload</router-link>
          <a class="item" @click="logout" href="#">Log Out</a>
        </div>
        <a v-else @click="logIn" class="ui item">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["isLoggedIn"]) },
  methods: { ...mapActions(["logIn", "logout"]) },
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
</style>
