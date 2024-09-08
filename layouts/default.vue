
<template>
<header>

</header>
<main>
    <div class="flex-grow">
      <slot />
    </div>
</main>
<footer>
<div>
  <button v-if="showButton" @click="scrollToTop" class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 z-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.75l-7.5-7.5-7.5 7.5m15 6l-7.5-7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</footer>
</template>

<script setup>
const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>