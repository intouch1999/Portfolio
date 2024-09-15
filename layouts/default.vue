<template>
  <header>
    <div v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-40 md:hidden" @click="closeMenu"></div>
    
    <nav :class="['fixed w-full bg-white shadow z-50 opacity-90 transition-transform duration-300', { 'transform -translate-y-full': isNavHidden }]">
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center z-50">
        <div class="flex items-center justify-between">
          <NuxtLink exact href="/" class="">
            <h2 class="text-2xl font-bold text-gray-800 md:text-3xl"  > <span class="text-blue-600">P</span>ortfol<span class="text-blue-600">io</span></h2>
          </NuxtLink>
          <div class="flex md:hidden">
            <button @click="toggleMenu" type="button" class="text-gray-500 bg-white hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div class="flex flex-col md:flex-row md:mx-6">
<NuxtLink
  exact
  class="nav-link my-2 text-gray-700 transition-all duration-300 transform hover:border hover:bg-blue-600 hover:text-white hover:border-blue-500 rounded-lg hover:px-3 hover:py-1 md:px-3 md:py-1 md:mx-2 md:my-auto"
  to="/"
>
  Home
</NuxtLink>

<NuxtLink
  class="nav-link my-2 text-gray-700 transition-all duration-300 transform hover:border hover:bg-blue-600 hover:text-white hover:border-blue-500 rounded-lg hover:px-3 hover:py-1 md:px-3 md:py-1 md:mx-2 md:my-auto"
  to="/projects"
>
  Projects
</NuxtLink>


          </div>
        </div>
      </div>
    </nav>
  </header>
  
  <main>
    <div class="">
      <slot />
    </div>
  </main>
  
  <footer>
    <div>
      <button v-if="showButton" @click="scrollToTop" class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.75l-7.5-7.5-7.5 7.5m15 6l-7.5-7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);
const isOpen = ref(false);
const lastScrollTop = ref(0);
const isNavHidden = ref(false);


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  const currentScrollTop = window.scrollY;
  showButton.value = currentScrollTop > 100;

  if (currentScrollTop > lastScrollTop.value) {
    isNavHidden.value = true;
  } else {
    isNavHidden.value = false;
  }

  lastScrollTop.value = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style>
.nav-link.router-link-active {
  @apply border bg-blue-600 text-white border-blue-500 rounded-lg px-3 py-1;
}

</style>