<template>
    <div>
        <VuestaPost v-bind:vuestaData="vuestaData"></VuestaPost>
    </div>
</template>

<script>
import VuestaPost from './VuestaPost.vue';

export default {
    name: "VuestaContainer",
    components: {
        VuestaPost
    },
    props: {
        vuestaData: Array
    }
}
</script>
