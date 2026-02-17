<template>
  <div class="min-h-screen flex flex-col">
    <header class="glass-dark sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <nav class="container mx-auto px-4 py-4">
        <ul class="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6">
          <li>
            <router-link 
              to="/" 
              class="nav-link px-4 py-2 rounded-lg transition-all duration-300"
              active-class="active"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="nav-link px-4 py-2 rounded-lg transition-all duration-300"
              active-class="active"
            >
              Sobre
            </router-link>
          </li>
          <li>
            <router-link 
              to="/projects" 
              class="nav-link px-4 py-2 rounded-lg transition-all duration-300"
              active-class="active"
            >
              Projetos
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="nav-link px-4 py-2 rounded-lg transition-all duration-300"
              active-class="active"
            >
              Contato
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="glass-dark border-t border-white/10 mt-16">
      <div class="container mx-auto px-4 py-8 text-center">
        <p class="text-gray-300 mb-2">
          &copy; <span class="font-semibold text-white">Marcos Cantarutti</span> {{ currentYear }}
        </p>
        <p class="text-gray-400 text-sm">Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { getCurrentYear } from '../utils/dateUtils';

const currentYear = getCurrentYear();
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-white hover:bg-white/10;
}

.nav-link.active {
  @apply text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20;
}
</style>