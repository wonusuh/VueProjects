import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      liked: 34,
      isLiked: false,
      more: {},
    };
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    addAge(state, payload) {
      state.age += payload;
    },
    like(state) {
      if (state.isLiked) {
        state.liked -= 1;
      } else {
        state.liked += 1;
      }
      state.isLiked = !state.isLiked;
    },
    /** actions에서 받아온 데이터를 state에 세팅 */
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    /** 서버로 데이터 요청 */
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((response) => {
          console.log(response.data);
          context.commit("setMore", response.data);
        })
        .catch(() => {
          alert("서비스호출 실패");
        });
    },
  },
});

export default store;
