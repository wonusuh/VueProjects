import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      liked: 34,
      isLiked: false,
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
  },
});

export default store;
