<template>
    <DefaultLayout>
      <div class="container mx-auto p-8 text-center text-white">
        <img
          src="../assets/images/profile.jpeg"
          alt="Foto de perfil"
          class="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h1 class="text-4xl font-bold mb-2">Marcos Cantarutti</h1>
        <p class="text-gray-200 font-bold mb-6 text-2xl">
          Desenvolvedor Web
        </p>
        <div class="mb-6">
          <div class="flex flex-wrap justify-center gap-4">
            <span class="bg-purple-500 text-white px-4 py-2 rounded-full font-bold">PHP</span>
            <span class="bg-red-500 text-white px-4 py-2 rounded-full font-bold">Laravel</span>
            <span class="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">JavaScript</span>
            <span class="bg-green-500 text-white px-4 py-2 rounded-full font-bold">Vue</span>
            <span class="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">React</span>
            <span class="bg-lime-500 text-white px-4 py-2 rounded-full font-bold">Node</span>
            <span class="bg-pink-500 text-white px-4 py-2 rounded-full font-bold">Tailwind / SCSS</span>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Card from '../components/Card.vue';
  import DefaultLayout from '../layouts/DefaultLayout.vue';

  </script>
  
  