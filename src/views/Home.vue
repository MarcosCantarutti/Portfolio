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
          <span class="icon bg-purple-500 text-white px-4 py-2 rounded-full font-bold">PHP</span>
          <span class="icon bg-red-500 text-white px-4 py-2 rounded-full font-bold">Laravel</span>
          <span class="icon bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">JavaScript</span>
          <span class="icon bg-green-500 text-white px-4 py-2 rounded-full font-bold">Vue</span>
          <span class="icon bg-blue-500 text-white px-4 py-2 rounded-full font-bold">React</span>
          <span class="icon bg-lime-500 text-white px-4 py-2 rounded-full font-bold">Node</span>
          <span class="icon bg-pink-500 text-white px-4 py-2 rounded-full font-bold">Tailwind / SCSS</span>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
.icon {
  transition: all 0.3s ease;
  cursor: pointer;
}
.icon:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}
</style>
