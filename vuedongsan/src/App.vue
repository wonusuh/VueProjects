<template>
  <!-- 한 원룸의 상세정보 모달입니다. -->
  <Transition name="fade">
    <MyModal @closeModal="모달창열렸니 = false;" v-bind:원룸들="원룸들" v-bind:누른거="누른거" v-bind:모달창열렸니="모달창열렸니" />
  </Transition>

  <!-- 화면 최상단의 네비게이션 입니다. -->
  <div class="menu">
    <a v-for="(navi, i) in 메뉴들" :key="i">{{ navi }}</a>
  </div>

  <!-- 홍보문구 입니다. -->
  <MyDiscount v-if="showDiscount === true" />


  <!-- 정렬 버튼입니다. -->
  <button @click="sortByPriceAsc">가격순정렬</button>
  <button @click="sortByPriceDsc">가격역순정렬</button>
  <button @click="resetSort">정렬초기화</button>

  <!-- 배열을 순회하여 모든 원룸들을 출력합니다. -->
  <MyCard v-on:openModal="모달창열렸니 = true; 누른거 = $event" v-bind:원룸="원룸들[i]" v-for="(원룸, i) in 원룸들" v-bind:key="원룸" />
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
      showDiscount: true,
      원룸들오리지널: [...data],
      myObject: { name: 'kim', age: 20 },
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: ['Home', 'Shop', 'About'],
    }
  },
  methods: {
    /** 가격의 오름차순으로 정렬합니다. */
    sortByPriceAsc() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    /** 가격의 내림차순으로 정렬합니다. */
    sortByPriceDsc() {
      this.원룸들.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    resetSort() {
      this.원룸들 = [...this.원룸들오리지널];
    }
  },
  components: {
    MyDiscount: MyDiscount,
    MyModal: MyModal,
    MyCard: MyCard
  }
}
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}

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
