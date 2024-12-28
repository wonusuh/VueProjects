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

  <VuestaContainer v-bind:vuestaData="vuestaData" v-bind:step="step"></VuestaContainer>
  <button v-on:click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import VuestaContainer from './components/VuestaContainer.vue';
import vuestaData from './assets/vuestaData';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      vuestaData: vuestaData,
      indexForGetRequest: 0,
      step: 0 // 현재 보역지고있는 페이지
    }
  },
  methods: {
    /**  get 요청 */
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.indexForGetRequest}.json`)
        .then((response) => {
          console.log(response.data);
          this.vuestaData.push(response.data);
          this.indexForGetRequest += 1;
        })
        .catch((err) => {
          alert(err);
        });
    },

    /** 페이지 변경 이벤트 */
    onClickChangeStep() {

    }
  },
  components: {
    VuestaContainer: VuestaContainer
  }
};
</script>

<style>
@import './css/style.css';
</style>
