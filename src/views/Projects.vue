<template>
  <DefaultLayout>
    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="animate-fade-in-up mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
          Meus Projetos
        </h1>
        <p class="text-gray-300 text-lg md:text-xl mb-2">
          Veja alguns dos meus projetos abaixo:
        </p>
        <p class="text-gray-400">
          Esses e outros projetos podem ser encontrados 
          <a 
            class="text-blue-400 hover:text-purple-400 font-semibold transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-purple-400" 
            href="https://github.com/MarcosCantarutti?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
          </a>
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="animate-fade-in-up"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <Card
            :title="project.title"
            :description="project.description"
            :link="project.link"
          />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
  
<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
  
const projects = ref([
  { 
    title: 'LP Desenvolvimento', 
    description: 'Site criado para divulgação do trabalho da LP voltada para consultoria, soluções empresariais, vagas etc', 
    link: 'https://github.com/MarcosCantarutti/lp-desenvolvimento-react' 
  },
  { 
    title: 'LP_MANAGEMENT', 
    description: 'Sistema de gerenciamento de vagas, contendo todo o processo de CRUD utilizando o framework do VueJS o NUXT 3 + Supabase', 
    link: 'https://github.com/MarcosCantarutti/LP_MANAGEMENT' 
  },
  { 
    title: 'Api-node', 
    description: 'Projeto de API para consumo de dados de players no jogo World of Warcraft', 
    link: 'https://github.com/MarcosCantarutti/api-node-csteam' 
  },
  { 
    title: 'Bookwise', 
    description: 'Sistema de gerenciamento de livros em PHP com os conceitos de um MVC', 
    link: 'https://github.com/MarcosCantarutti/bookwise' 
  },
  { 
    title: 'FreelanceHours', 
    description: 'Projeto feito com Laravel e Livewire, onde freelancers podem enviar propostas de horas que podem contribuir em determinado projeto.', 
    link: 'https://github.com/MarcosCantarutti/Freelancer-Hours-NLW' 
  },
  { 
    title: 'Onlygists', 
    description: 'Projeto do curso de NUXT 3 voltado para aprender o uso do framework na versão mais recente', 
    link: 'https://github.com/MarcosCantarutti/onlygists' 
  },
]);
</script>
  