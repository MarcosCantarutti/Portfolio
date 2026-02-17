<template>
  <a 
    :href="link" 
    target="_blank" 
    rel="noopener noreferrer"
    class="block group"
  >
    <div class="glass rounded-xl p-6 md:p-8 h-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-white/10 hover:border-white/30">
      <div class="flex items-start justify-between mb-4">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
          {{ title }}
        </h3>
        <svg class="w-6 h-6 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p class="text-gray-300 mb-6 text-base md:text-lg leading-relaxed line-clamp-3">
        {{ description }}
      </p>
      <div class="flex items-center text-blue-400 font-semibold group-hover:text-purple-400 transition-colors duration-300">
        <span>Ver no GitHub</span>
        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <slot />
    </div>
  </a>
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
