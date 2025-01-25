<template>
  <div class="header">
    <ul class=" header-button-left">
      <li>Cancel</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="이미지" />
    <ul class="header-button-right">
      <li v-if="this.step === 2" v-on:click="publishAPost">Publish</li>
      <li v-else v-on:click="moveToNext">Next</li>
    </ul>
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <h4>age : {{ $store.state.age }}</h4>
  <button v-on:click="$store.commit('changeName')">이름변경</button>
  <button v-on:click="$store.commit('addAge', 10)">나이변경</button>

  <VuestaContainer v-bind:vuestaData="vuestaData" v-bind:step="step" v-bind:imgUrl="imgUrl"
    v-bind:selectedFilter="selectedFilter" v-on:textChanged="handleTextChanged"></VuestaContainer>
  <button v-on:click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" v-on:change="upload" multiple accept="image/*" />
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
      step: 0, // 현재 보여지고있는 페이지의 인덱스
      imgUrl: '', // 업로드한 이미지의 url
      postContent: '',
      selectedFilter: ''
    }
  },
  mounted() {
    /** 필터 적용 */
    this.emitter.on('fire', (_selectedFilter) => {
      console.log('at App', _selectedFilter)
      this.selectedFilter = _selectedFilter
    })
  },
  methods: {
    /** get 요청 */
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

    /** 이미지 업로드 */
    upload(event) {
      const file = event.target.files
      console.log('file -> ', file[0])
      console.log('file.type -> ', file[0].type)
      this.imgUrl = URL.createObjectURL(file[0])
      console.log(this.imgUrl)
      this.step = 1
    },

    /** 다음 페이지로 이동 */
    moveToNext() {
      this.step += 1
      if (this.step > 2) this.step = 0
    },

    /** 글 하나 출판 */
    publishAPost() {
      const myPost = {
        name: "Minny",
        userImage: "https://picsum.photos/100?random=5",
        postImage: this.imgUrl,
        likes: 49,
        date: "Apr 4",
        liked: false,
        content: this.postContent,
        filter: this.selectedFilter,
      }
      console.log('myPost -> ', myPost)
      this.vuestaData.unshift(myPost) // 배열의 첫 번째에 집어넣기
      this.step = 0
    },

    /** 자식컴포넌트의 텍스트에어리어에서 받아온 글을 메인에 세팅 */
    handleTextChanged(emittedValue) {
      this.postContent = emittedValue
    }
  },
  components: {
    VuestaContainer: VuestaContainer,
  }
};
</script>

<style>
@import './css/style.css';
</style>
