<template>
  <DefaultLayout>
    <div class="container mx-auto px-4 py-16 md:py-24 text-center">
      <!-- Profile Image with Animation -->
      <div class="mb-8 animate-fade-in-up">
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-glow"></div>
          <img
            src="../assets/images/profile.png"
            alt="Foto de perfil"
            class="relative w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl animate-float"
          />
        </div>
      </div>

      <!-- Name with Gradient -->
      <h1 class="text-5xl md:text-7xl font-extrabold mb-4 text-gradient animate-fade-in-up" style="animation-delay: 0.1s">
        Marcos Cantarutti
      </h1>
      
      <!-- Title -->
      <p class="text-gray-300 font-semibold mb-12 text-xl md:text-3xl animate-fade-in-up" style="animation-delay: 0.2s">
        Desenvolvedor Web
      </p>

      <!-- Tech Stack -->
      <div class="mb-12 animate-fade-in-up" style="animation-delay: 0.3s">
        <p class="text-gray-400 mb-6 text-sm md:text-base uppercase tracking-wider">Tecnologias</p>
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            PHP
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            JavaScript / Typescript
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            NodeJS
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            Laravel
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            VueJS
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            React
          </span>
          <span class="icon glass px-5 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-110 hover:bg-white/10">
            Tailwind 
          </span>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="animate-fade-in-up" style="animation-delay: 0.4s">
        <Button variant="primary" @click="scrollToProjects" class="mt-8">
          Ver Projetos
        </Button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Button from '../components/Button.vue';

const router = useRouter();

function scrollToProjects() {
  router.push('/projects');
}
</script>

<style scoped>
.icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.icon:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}
</style>
