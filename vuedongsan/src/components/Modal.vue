<template>
    <div class="black-bg" v-if="modalStatus === true" v-on:click="modalStatus = false">
        <div class="white-bg">
            <p>{{ onerooms[clickedOneroomId].id }}</p>
            <h4>{{ onerooms[clickedOneroomId].title }}</h4>
            <img :src=onerooms[clickedOneroomId].image alt="원룸 이미지입니다." />
            <Discount />
            <p>{{ onerooms[clickedOneroomId].content }}</p>
            <p>{{ onerooms[clickedOneroomId].price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'componentModal',
    data() {
        return {
        }
    }
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

.room-img {
    width: 25%;
    margin-top: 40px
}
</style>
