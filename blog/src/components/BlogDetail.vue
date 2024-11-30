<template>
    <!-- {{ $route.params.id }} -->
    <div>
        <h4>상세페이지</h4>
        <p>id : {{ 블로그글[$route.params.id].number }}</p>
        <p>{{ 블로그글[$route.params.id].title }}</p>
        <p>{{ 블로그글[$route.params.id].content }}</p>
        <p>{{ 블로그글[$route.params.id].date }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'BlogDetail',
    props: {
        블로그글: Array
    }
}
</script>
