<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle m-4">
      <div class="flex flex-col items-center justify-center text-center w-full" data-aos="fade-up">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 m-4 hover:text-blue-600 transition-colors duration-300">MY SKILLS</h1>
        <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
    :slides-per-view="5"
    :space-between="10"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :effect="'coverflow'"
    :coverflowEffect="{
      rotate: 10,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="{ clickable: true }"
    :breakpoints="{
      '640': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }"
    class="w-full"
  >
    <SwiperSlide v-for="(skill, index) in skills" :key="skill.icon" class="text-center group">
      <div class="w-24 h-24 mx-auto flex items-center justify-center">
        <NuxtImg :src="`/img/skills/${skill.icon}.svg`" :class="skill.class" class="w-full h-full object-contain" :alt="skill.title" />
      </div>
      <p class="mt-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-semibold">
        {{ skill.title }}
      </p>
    </SwiperSlide>
  </Swiper>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
  
  const SwiperAutoplay = Autoplay
  const SwiperEffectCoverflow = EffectCoverflow
  const SwiperPagination = Pagination
  
  const skills = [
    { icon: 'html', title: 'HTML', class: 'stroke-black' },
    { icon: 'css', title: 'CSS' },
    { icon: 'javascript', title: 'JavaScript' },
    { icon: 'jquery', title: 'Jquery' },
    { icon: 'bootstrap', title: 'Bootstrap' },
    { icon: 'nuxt', title: 'Nuxt.js' },
    { icon: 'vue', title: 'Vue.js' },
    { icon: 'PHP', title: 'PHP' },
    { icon: 'nodejs', title: 'Node.js' },
    { icon: 'express', title: 'Express.js' },
    { icon: 'mysql', title: 'MySQL' },
    { icon: 'postgresql', title: 'PostgreSQL' },
    { icon: 'git', title: 'Git' },
    { icon: 'postman', title: 'Postman' }
  ]
  </script>
  
  <style scoped>
  .triangle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-100%) scale(0);
    top: 30px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #2563eb; /* blue-600 */
    transition: transform 0.3s ease-in-out;
  }
  
  .group:hover .triangle {
    transform: translateX(-50%) translateY(-100%) scale(1);
  }
  
  /* Add these styles to adjust Swiper pagination */
  :deep(.swiper-pagination-bullet) {
    background-color: #4b5563; /* gray-600 */
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background-color: #2563eb; /* blue-600 */
  }

  
  </style>