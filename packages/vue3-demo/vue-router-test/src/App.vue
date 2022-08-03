
<template>
  <div>
    <RouterLink to="/"></RouterLink>
    <!-- <RouterLink to="/about">关于</RouterLink> -->
  </div>
  
<RouterView v-slot="{ Component }">
</RouterView>
</template>

<script setup>
import RouterLink from './router/RouterLink.vue';
import RouterView from './router/RouterView.vue';
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