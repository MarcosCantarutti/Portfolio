<template>
    <DefaultLayout>
      <div class="container mx-auto p-8">
        <h1 class="text-3xl text-white font-bold mb-6">Sobre Mim</h1>
        <p class="text-white mb-6 text-lg">
          Olá!
          Meu nome é Marcos, tenho 30 anos e sou formado em Análise e Desenvolvimento de Sistemas pela
          Uninter

          Atualmente venho me aprimorando no desenvolvimento web, principalmente dando foco ao PHP e Javascript e seus frameworks.

          Sempre em busca de me aprimorar nas técnologias mais utilizadas pelo mercado, sempre de olho em outras vertentes importantes como Docker, SCSS/Tailwind, acessibilidade e soft skills.

          E nas horas vagas gosto de curtir alguns jogos, animes, etc!
          </p>
        <Button class="center" @click="navigateToContact"><a href="https://www.linkedin.com/in/marcos-cantarutti/" target="_blank">Entre em Contato</a></Button>
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
  </script>
  