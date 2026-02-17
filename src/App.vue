<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
  