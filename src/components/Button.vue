<template>
  <button
    :class="[
      'px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent',
      variant === 'primary' 
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-purple-500 shadow-md hover:shadow-xl' 
        : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 focus:ring-pink-500 shadow-md hover:shadow-xl',
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
});

const emit = defineEmits(['click']);
</script>
