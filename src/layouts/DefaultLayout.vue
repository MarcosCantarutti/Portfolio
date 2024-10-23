<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-gray-800 text-white p-4">
        <nav class="container mx-auto">
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:underline">Home</router-link></li>
            <li><router-link to="/about" class="hover:underline">Sobre</router-link></li>
            <li><router-link to="/projects" class="hover:underline">Projetos</router-link></li>
            <li><router-link to="/contact" class="hover:underline">Contato</router-link></li>
          </ul>
        </nav>
      </header>
  
      <main class="flex-grow container mx-auto p-8 ">
        <slot />
      </main>
  
      <footer class="bg-gray-800 text-white text-center p-4">
        <p>&copy; Marcos Cantarutti {{ currentYear }}<br>Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { getCurrentYear } from '../utils/dateUtils';
  
  const currentYear = getCurrentYear();
  </script>