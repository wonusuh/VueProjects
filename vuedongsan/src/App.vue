<template>
  <!-- 원룸을 클릭했을 때 나타나는 상세정보 모달입니다. -->
  <Modal v-bind:oneroomsData="oneroomsData" :clickedOneroomId="clickedOneroomId" :modalStatus="modalStatus" />

  <!-- 상단의 네비게이션 바 입니다. -->
  <div class="menu">
    <a v-for=" (item, i) in menus" :key="i"> {{ item }}</a>
  </div>

  <!-- 할인 안내를 위한 컴포넌트입니다. -->
  <Discount v-bind="object" />

  <!-- 각각의 원룸들을 반복하며 출력합니다. -->
  <Card v-bind:oneroomsData="oneroomsData" />
</template>

<script>
import oneroomsData from './assets/oneroomsData.js';
import componentDiscount from './components/Discount.vue';
import componentModal from './components/Modal.vue';
import componentCard from './components/Card.vue';

export default {
  name: "App",
  data() {
    return {
      object: { name: 'kim', age: 20 },
      oneroomsData: oneroomsData,
      menus: ["Home", "Products", `About`],
      modalStatus: false,
    };
  },
  methods: {
  },
  components: {
    Discount: componentDiscount,
    Modal: componentModal,
    Card: componentCard
  },
};
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
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: wheat;
  padding: 10px;
}
</style>
