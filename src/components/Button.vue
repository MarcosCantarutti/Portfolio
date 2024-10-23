<template>
  <button
    :class="[
      'px-4 py-2 rounded text-white',
      variant === 'primary' ?  'bg-gray-500 hover:bg-gray-600': 'bg-blue-500 hover:bg-blue-600' ,
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
