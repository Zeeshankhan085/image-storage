<template>
  <div class="dropper">
    <input type="file" @change="upload" multiple accept="image/*" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["uploadImages"]),
    upload(event) {
      console.log(event);
      this.uploadImages(event.target.files);
    }
  }
};
</script> 

<style scoped>
.dropper {
  margin: 4em auto;
  border: 2px solid #ddd;
  border-radius: 10px;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
