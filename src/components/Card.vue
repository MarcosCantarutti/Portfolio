<template>
  <div class="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer	">
    <h3 class="text-xl font-bold text-gray-800 mb-3">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <a class="text-blue-600 font-semibold hover:underline" href="{{ link }}">GitHub</a>
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Adicionando algumas sombras e transições */
.bg-white {
  transition: all 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}
</style>
