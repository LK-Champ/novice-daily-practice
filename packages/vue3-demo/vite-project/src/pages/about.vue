
<template>
    <h1>这是关于页面</h1>
    <input type="text" v-model="score" min="0" max="5">
    <!-- <RateDefault :value="score" /> -->
    <div>当前选中的分数是：{{modelValue}}</div>
    <Rate v-model="modelValue"><img width="14" src="/favicon.ico" /></Rate>
    <Heading level="1">1</Heading>
    <JsxHeading level="2">2</JsxHeading>
</template>
<script setup>
import { ref } from "vue";
import RateDefault from "../components/RateDefault.vue";
import Rate from "../components/Rate.vue";
import Heading from "../components/Heading.jsx";
import JsxHeading from "../components/JsxHeading.jsx";

let score = ref(3.5);
let modelValue = ref(score);
</script>