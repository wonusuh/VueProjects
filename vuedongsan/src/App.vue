<template>
  <!-- 한 원룸의 상세정보 모달입니다. -->
  <div class="black-bg" v-if="모달창열렸니 === true">
    <div class="white-bg">
      <p>{{ 원룸들[누른거].id }}</p>
      <h4>{{ 원룸들[누른거].title }}</h4>
      <img :src="원룸들[누른거].image" alt="원룸 이미지 입니다.">
      <p>{{ 원룸들[누른거].content }}</p>
      <p>{{ 원룸들[누른거].price }} 원</p>
      <button v-on:click="모달창열렸니 = false;">닫기</button>
    </div>
  </div>

  <!-- 화면 최상단의 네비게이션 입니다. -->
  <div class="menu">
    <a v-for="(navi, i) in 메뉴들" :key="i">{{ navi }}</a>
  </div>

  <!-- 배열을 순회하여 모든 원룸들을 출력합니다. -->
  <div v-for="(oneroom, i) in 원룸들" :key="i">
    <img :src="oneroom.image" alt="원룸 이미지 입니다." class="room-img" />
    <h4 v-on:click="모달창열렸니 = true; 누른거 = i;">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }} 원</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js';

export default {
  name: 'App',
  /** 데이터 저장공간을 React에서는 state 라고 부릅니다. */
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: ['Home', 'Shop', 'About'],
    }
  },
  methods: {
  },
  components: {
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

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
