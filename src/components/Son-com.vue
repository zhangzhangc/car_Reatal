<script setup>
defineProps({
    message: String,
    count:Number
})
const emit = defineEmits(['get-message'])          //定义宏函数
const sendMsg = (() => {
    emit ('get-message','this is son msg')
})


</script>
<template>
    <h2>我是子组件</h2>
    <!-- 父组件传入的信息-{{ message }}---{{count}} -->
    <button @click="sendMsg">子传父</button>

</template>
