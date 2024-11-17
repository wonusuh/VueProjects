<template>
    <!-- 한 원룸의 상세정보 모달입니다. -->
    <div class="black-bg" v-if="모달창열렸니 === true">
        <div class="white-bg">
            <img :src="원룸들[누른거].image" alt="원룸 이미지 입니다." style="width : 50%;">
            <h4>{{ 원룸들[누른거].title }}</h4>
            <p>{{ 원룸들[누른거].content }}</p>
            <p>{{ 원룸들[누른거].price }} 원</p>
            <Discount />
            <button v-on:click="closeModal();">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyModal',
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
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
</style>
