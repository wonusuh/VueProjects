<template>
  <!-- 한 원룸의 상세정보 모달입니다. -->
  <MyModal @closeModal="모달창열렸니 = false;" v-bind:원룸들="원룸들" v-bind:누른거="누른거" v-bind:모달창열렸니="모달창열렸니" />

  <!-- 화면 최상단의 네비게이션 입니다. -->
  <div class="menu">
    <a v-for="(navi, i) in 메뉴들" :key="i">{{ navi }}</a>
  </div>

  <!-- 홍보문구 입니다. -->
  <MyDiscount v-bind="myObject" />

  <!-- 배열을 순회하여 모든 원룸들을 출력합니다. -->
  <MyCard @openModal="모달창열렸니 = true; 누른거 = $event" v-bind:원룸="원룸들[i]" v-for="(원룸, i) in 원룸들" v-bind:key="원룸" />
</template>

<script>
import data from './assets/oneroom.js';
import MyDiscount from './components/MyDiscount.vue';
import MyModal from './components/MyModal.vue';
import MyCard from './components/MyCard.vue';

export default {
  name: 'App',
  /** 데이터 저장공간을 React에서는 state 라고 부릅니다. */
  data() {
    return {
      myObject: { name: 'kim', age: 20 },
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: ['Home', 'Shop', 'About'],
    }
  },
  methods: {
  },
  components: {
    MyDiscount: MyDiscount,
    MyModal: MyModal,
    MyCard: MyCard
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
