
<template>
  <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> |
    <router-link to="/width">宽度</router-link>
  </div>
  
<router-view v-slot="{ Component }">
</router-view>
</template>

<script setup>
import { ref } from "vue";
  function fib(n){ 
    if(n<=1) return 1 
    return fib(n-1)+fib(n-2)
  }
  let count = ref(fib(38))
  console.log(count.value);
</script>
<style scoped>
.out-in-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.out-in-enter-active {
  transition: all 0.3s ease;
}

.out-in-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.out-in-leave-active {
  transition: all 0.3s ease;
}
</style>