<template>
  <!-- 원룸을 클릭했을 때 나타나는 상세정보 모달입니다. -->
  <Modal />

  <!-- 상단의 네비게이션 바 입니다. -->
  <div class="menu">
    <a v-for=" (item, i) in menus" :key="i"> {{ item }}</a>
  </div>

  <!-- 할인 안내를 위한 컴포넌트입니다. -->
  <Discount />


  <!-- 각각의 반복하며 출력합니다. -->
  <div v-for="(item, i) in onerooms" :key="i">
    <img class="room-img" :src="item.image" alt=" 원룸이미지" />
    <h4 v-on:click="modalStatus = true; clickedOneroomId = item.id;">{{ item.title }}</h4>
    <p>{{ item.price }} 원</p>
  </div>
</template>

<script>
import oneroomsData from './assets/oneroomsData.js';
import componentDiscount from './components/Discount.vue';
import componentModal from './components/Modal.vue';

export default {
  name: "App",
  data() {
    return {
      onerooms: oneroomsData,
      numberOfReport: [0, 0, 0],
      menus: ["Home", "Products", `About`],
      products: ["역삼동원룸", "천호동원룸", `마포구원룸`],
      modalStatus: false,
      clickedOneroomId: 0
    };
  },
  methods: {
    increase(i) {
      this.numberOfReport[i] += 1234;
    },
    getImgPath(index) {
      return (require("@/assets/oneRoomImages/room" + index + ".jpg"));
    }
  },
  components: {
    Discount: componentDiscount,
    Modal: componentModal
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

.room-img {
  width: 25%;
  margin-top: 40px
}

img {
  width: 100%;
}
</style>
