<template>
    <!-- 한 원룸의 상세정보 모달입니다. -->
    <div class="black-bg" v-if="모달창열렸니 === true">
        <div class="white-bg">
            <img :src="원룸들[누른거].image" alt="원룸 이미지 입니다." style="width : 50%;">
            <h4>{{ 원룸들[누른거].title }}</h4>
            <p>{{ 원룸들[누른거].content }}</p>
            <input v-model="month" />
            <p>{{ month }}개월 선택함 : {{ month * 원룸들[누른거].price }} 원</p>
            <button v-on:click="closeModal();">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyModal',
    data() {
        return {
            month: 1
        }
    },
    watch: {
        month(a) {
            // 입력값이 숫자가 아닐 경우에 경고창을 띄웁니다.
            if (isNaN(a) === true) {
                alert('숫자만 입력할 수 있습니다.');
                this.month = 1;
                return;
            }
            // 12개월을 초과한 값을 입력했을 때 경고창을 띄웁니다.
            if (a > 12) {
                alert('12개월을 초과할 수 없습니다.');
                this.month = 12;
            }
        }
    },
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    },
    beforeUpdate() {
        if (this.month == 2) {
            alert(`2개월은 안됩니다.`);
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
