<template>
    <!-- 포스트 -->
    <VuestaPost v-if="step === 0" v-bind:vuestaData="vuestaData" v-bind:selectedFilter="selectedFilter"></VuestaPost>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
        <div v-bind:class="`upload-image ${this.selectedFilter}`" v-bind:style="`background-image: url(${imgUrl})`">
        </div>
        <div class=" filters">
            <FilterBox v-bind:imgUrl="imgUrl" v-bind:filterClass="filtersList[i]" v-for="(filter, i) in filtersList"
                v-bind:key="i">
                {{ filter }}
            </FilterBox>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
        <div v-bind:class="`upload-image ${selectedFilter}`" v-bind:style="{ backgroundImage: `url(${imgUrl})` }"></div>
        <div class="write">
            <textarea class="write-box" v-on:input="onTextAreaChanged">write!</textarea>
        </div>
    </div>

    <!-- 마이 페이지 -->
    <div v-if="step === 3">
        <MyPage v-bind:one="1"></MyPage>
    </div>
</template>

<script>
import VuestaPost from './VuestaPost.vue';
import FilterBox from './FilterBox.vue';
import MyPage from './MyPage.vue';

export default {
    name: "VuestaContainer",
    emits: ['textChanged'],
    data() {
        return {
            filtersList: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
    components: {
        VuestaPost,
        FilterBox: FilterBox,
        MyPage: MyPage
    },
    props: {
        vuestaData: Array,
        step: Number,
        imgUrl: String,
        selectedFilter: String
    },
    methods: {
        /** 텍스트에어리의 밸류가 변경될 때 부모컴포넌트로 보내기  */
        onTextAreaChanged(event) {
            console.log(event.target.value)
            this.$emit('textChanged', event.target.value)
        }
    }
}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>