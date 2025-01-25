<template>
    <div v-bind:class="`filter-item ${filterClass}`" v-bind:style="`background-image: url(${imgUrl})`"
        v-on:click="applyFilter">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'filterBox',
    props: {
        imgUrl: String,
        filterClass: String
    },
    methods: {
        /** 필터를 적용 */
        applyFilter() {
            console.log('at FilterBox -> ', this.filterClass)
            this.emitter.emit('fire', this.filterClass)
        }
    }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: gold;
    background-size: cover;
    background-position: center;
}
</style>
