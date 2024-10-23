<template>
  <DefaultLayout>
    <div class="container mx-auto p-8 text-white">
      <h1 class="text-3xl font-bold mb-4">Contato</h1>
      <p class="mb-6">Sinta-se à vontade para entrar em contato comigo através do email ou pelas redes sociais!</p>
      
      <div class="mb-4">
        <h2 class="text-2xl font-semibold mb-2">Email</h2>
        <p>
          <a :href="`mailto:${email}`" class="text-sky-600 hover:underline">{{ email }}</a>
        </p>
      </div>

      <div class="mb-4">
        <h2 class="text-2xl font-semibold mb-2">Redes Sociais</h2>
        <ul class="space-y-2">
          <li>
            <a :href="github" class="text-sky-600 hover:underline no-underline" target="_blank">GitHub</a>
          </li>
          <li>
            <a :href="linkedin" class="text-sky-600 hover:underline no-underline" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  const email = "marcossandim21@gmail.com";
  const github = "https://github.com/MarcosCantarutti/"; 
  const linkedin = "https://www.linkedin.com/in/marcos-cantarutti/"; 
</script>

<style scoped>
</style>
