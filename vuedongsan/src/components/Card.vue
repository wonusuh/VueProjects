<template>
    <div v-for="(item, i) in oneroomsData" :key="i">
        <img class="room-img" :src="item.image" alt="원룸 이미지 입니다." />
        <h4>{{ item.title }}</h4>
        <p>{{ item.price }} 원</p>
    </div>
</template>

<script>
export default {
    name: 'componentCard',
    props: {
        oneroomsData: Array,
        clickedOneroomId: Number
    },
}
</script>

<style>
.room-img {
    width: 25%;
    margin-top: 40px
}
</style>
