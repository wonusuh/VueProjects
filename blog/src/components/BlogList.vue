<template>
    <!-- <div>
        <h5 v-on:click="$router.push('/detail/0')">{{ 블로그글[0].title }}</h5>
        <p>{{ 블로그글[0].date }}</p>
    </div>
    <div>
        <h5 v-on:click="$router.push('/detail/1')">{{ 블로그글[1].title }}</h5>
        <p>{{ 블로그글[1].date }}</p>
    </div>
    <div>
        <h5 v-on:click="$router.push('/detail/2')">{{ 블로그글[2].title }}</h5>
        <p>{{ 블로그글[2].date }}</p>
    </div> -->
    <div v-for="(item, i) in 블로그글" :key="i">
        <h5 v-on:click="$router.push(`/detail/${i}`)">{{ item.title }}</h5>
        <p>{{ item.date }}</p>
    </div>
</template>

<script>
export default {
    name: 'BlogList',
    props: {
        블로그글: Array
    }
}
</script>
