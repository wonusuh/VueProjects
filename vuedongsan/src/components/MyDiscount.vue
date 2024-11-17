<template>
    <!-- 홍보문구 입니다. -->
    <div class="discount">
        <h4>지금 결제하면 {{ discountAmount }}% 할인</h4>
    </div>
</template>

<script>
export default {
    name: 'cmpnDiscount',
    data() {
        return {
            discountAmount: 30,
        }
    },
    mounted() {
        setInterval(() => {
            this.discountAmount -= 1;
        }, 1000);
    }
}
</script>

<style>
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</style>
