<template>
    <div class="bg-white shadow-md rounded-lg p-4">
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-700 mb-2">{{ description }}</p>
      <a class="text-gray-900 font-bold" href="{{ link }}">GitHub</a>
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
  