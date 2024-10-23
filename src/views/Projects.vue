<template>
    <DefaultLayout>
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-6 text-white">Veja alguns dos meus projetos abaixo:</h1>
        <p class="font-bold mb-4 text-white">Esses e outros projetos podem ser encontrados <a class="text-sky-400" href="https://github.com/MarcosCantarutti?tab=repositories">aqui</a></p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
            :link="project.link"
          />
        </div>
      </div>
    </DefaultLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Card from '../components/Card.vue';
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  
  const projects = ref([
    { title: 'LP Desenvolvimento', description: 'Site criado para divulgação do trabalho da LP voltada para consultoria , soluções empresarias, vagas etc',link: 'https://github.com/MarcosCantarutti/lp-desenvolvimento-react' },
    { title: 'LP_MANAGEMENT', description: 'Sistema de gerenciamento de vagas, contendo todo o processo de CRUD utilizando o framework do VueJS o NUXT 3 + Supabase',link: 'https://github.com/MarcosCantarutti/LP_MANAGEMENT' },
    { title: 'Api-node', description: 'Projeto de api para consumo de dados de players no jogo World of Warcraft ',link: 'https://github.com/MarcosCantarutti/api-node-csteam' },
    { title: 'Bookwise', description: 'Sistema de gerenciamento de livros em PHP com os conceitos de um MVC',link: 'https://github.com/MarcosCantarutti/bookwise' },
    { title: 'FreelanceHours', description: 'Projeto feito com Laravel e Livewire, onde freelancers podem enviar propostas de horas que podem contribuir em determinado projeto.',link: 'https://github.com/MarcosCantarutti/Freelancer-Hours-NLW' },
    { title: 'Onlygists', description: 'projeto do curso de NUXT 3 https://luckyhackers.academy/course/nuxt-extreme , voltado para aprender o uso do framework na versão mais recente',link: 'https://github.com/MarcosCantarutti/onlygists' },
  ]);
  </script>
  