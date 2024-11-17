<template>
    <!-- 배열을 순회하여 모든 원룸들을 출력합니다. -->
    <div>
        <img :src="원룸.image" alt="원룸 이미지 입니다." class="room-img" />
        <h4 v-on:click="send();">{{ 원룸.title }}</h4>
        <p>{{ 원룸.price }} 원</p>
    </div>
</template>

<script>
export default {
    name: 'MyCard',
    props: {
        원룸: Object
    },
    methods: {
        send() {
            this.$emit('openModal', this.원룸.id)
        }
    }
}
</script>

<style>
.room-img {
    width: 75%;
    margin-top: 40px;
}
</style>
