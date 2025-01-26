<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="?" v-on:input="searchUsers" />
        <div class="post-header" v-for="(user, i) in follower" v-bind:key="i">
            <div class="profile" v-bind:style="`background-image: url(${user.image})`"></div>
            <span class="profile-name">{{ user.name }}</span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs, watch, computed } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
    name: 'myPage',
    props: {
        one: Number,
        two: Number
    },
    setup(props, context) {
        // created 와 비슷
        const follower = ref([])
        const test = reactive({ name: 'kim' });

        test;
        context;
        const { one, two } = toRefs(props);

        watch(one, () => {
            // one 이 변경될 때 마다 실행되는 함수
        })

        computed(() => {
            return null
        })

        const store = useStore()
        console.log(store.state.name)

        console.log(one.value)
        console.log(two.value)

        /** 검색기능 */
        function searchUsers(event) {
            console.log(event.target.value)
            if (event.target.value === '') {
                axios
                    .get('/follower.json')
                    .then((response) => {
                        follower.value = response.data
                    })
                    .catch((error) => {
                        alert(error)
                    })

                return
            }
            let newArray = []
            follower.value.forEach((element) => {
                if (element.name.includes(event.target.value))
                    newArray.push(element)
            });
            follower.value = newArray
        }

        onMounted(() => {
            axios
                .get('/follower.json')
                .then((response) => {
                    follower.value = response.data
                })
                .catch((error) => {
                    alert(error)
                })

        })

        return { follower, searchUsers }
    },
    data() { return {} }
}
</script>

<style lang="scss" scoped></style>
