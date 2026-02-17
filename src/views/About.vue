<template>
  <DefaultLayout>
    <div class="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <div class="animate-fade-in-up">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-8 text-gradient">Sobre Mim</h1>
        
        <div class="glass rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
          <div class="space-y-6 text-gray-200 text-lg md:text-xl leading-relaxed">
            <p>
              Olá! Meu nome é <span class="text-white font-semibold">Marcos</span>, tenho 31 anos e sou formado em 
              <span class="text-blue-400 font-semibold">Análise e Desenvolvimento de Sistemas</span> pela Uninter.
            </p>
            <p>
              Atualmente venho me aprimorando no desenvolvimento web, principalmente dando foco ao 
              <span class="text-purple-400 font-semibold">PHP</span> e <span class="text-yellow-400 font-semibold">Javascript / Typescript</span> 
              e seus frameworks. Sempre em busca de me aprimorar nas tecnologias mais utilizadas pelo mercado, 
              sempre de olho em outras vertentes importantes como Docker, Tailwind, acessibilidade e soft skills.
            </p>
            <p>
              E nas horas vagas gosto de curtir alguns jogos, animes, etc! 🎮
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" @click="navigateToContact" class="w-full sm:w-auto">
            <a href="https://www.linkedin.com/in/marcos-cantarutti/" target="_blank" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Entre em Contato
            </a>
          </Button>
          <Button variant="secondary" @click="navigateToProjects" class="w-full sm:w-auto">
            Ver Projetos
          </Button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const router = useRouter();

function navigateToContact() {
  router.push('/contact');
}

function navigateToProjects() {
  router.push('/projects');
}
</script>
