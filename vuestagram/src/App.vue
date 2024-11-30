<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="이미지" />
  </div>

  <VuestaContainer v-bind:vuestaData="vuestaData" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import vuestaData from './assets/vuestaData';
import VuestaContainer from './components/VuestaContainer.vue';

export default {
  name: "App",
  data() {
    return {
      vuestaData: vuestaData
    }
  },
  components: {
    VuestaContainer: VuestaContainer
  },
};
</script>

<style>
@import './css/style.css';
</style>
