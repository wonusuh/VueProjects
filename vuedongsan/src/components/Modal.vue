<template>
    <div class="black-bg" v-if="modalStatus === true">
        <div class="white-bg">
            <p>{{ oneroomsData[clickedOneroomId].id }}</p>
            <h4>{{ oneroomsData[clickedOneroomId].title }}</h4>
            <img :src=oneroomsData[clickedOneroomId].image alt="원룸 이미지입니다." />
            <Discount />
            <p>{{ oneroomsData[clickedOneroomId].content }}</p>
            <p>{{ oneroomsData[clickedOneroomId].price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'componentModal',
    props: {
        oneroomsData: Array,
        clickedOneroomId: Number,
        modalStatus: Boolean
    },
}
</script>

<style>
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

img {
    width: 100%;
}
</style>
