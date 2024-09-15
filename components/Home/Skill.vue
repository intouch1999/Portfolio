<template>
<Layout>
      <div class="flex flex-col items-center justify-center text-center w-full" data-aos="fade-up">
        <div class="text-center mb-4">
          <h1 class="mt-2 text-2xl font-semibold text-blue-500 md:text-3xl hover:text-blue-600 transition-colors duration-300">My Skills</h1>      
        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
        
        
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
          :slides-per-view="3"
          :space-between="10"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :effect="'cards'"
          :coverflowEffect="{
            rotate: 10,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }"
          :pagination="{
            dynamicBullets: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            '1280': {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }"
          class="w-full swiper-container my-8 -z-10"
        >
          <SwiperSlide v-for="skill in skills" :key="skill.icon" class="text-center group bg-white rounded-2xl shadow-lg p-3 md:p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 md:w-24 md:h-24 mx-auto flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-2  rounded-full shadow-lg transform transition-all duration-300 hover:scale-110">
              <NuxtImg :src="`/img/skills/${skill.icon}.svg`" :class="skill.class" class="w-8 h-8 md:w-16 md:h-16 object-contain" :alt="skill.title"  :srcset="null"  />
            </div>
            <p class="text-xs mt-4 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-semibold">
              {{ skill.title }}
            </p>
          </SwiperSlide>
        </Swiper>
        <div @click="toggleSkillsList" class="cursor-pointer text-center flex flex-col justify-center align-middle">
          <p class="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-semibold mb-2">Show More</p>
          <div class="  text-center flex justify-center">
          <svg class="w-6 h-6 text-gray-800 animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
        </svg>
        </div>
        </div>



  
        <transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="showSkillsList" class="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6">
            <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <li v-for="skill in skills" :key="skill.icon" 
                  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-300 hover:bg-blue-50 justify-center">
                <span class="text-sm font-medium text-gray-700">{{ skill.title }}</span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
</Layout>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
  
  const SwiperAutoplay = Autoplay
  const SwiperEffectCoverflow = EffectCoverflow
  const SwiperPagination = Pagination
  
  const showSkillsList = ref()
  
  const toggleSkillsList = () => {
    showSkillsList.value = !showSkillsList.value
  }
  
  const skills = [
    { icon: 'html', title: 'HTML', class: 'stroke-black' },
    { icon: 'css', title: 'CSS' },
    { icon: 'javascript', title: 'JavaScript' },
    { icon: 'jquery', title: 'jQuery' },
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
  .swiper-container {
    padding-bottom: 40px;
  }
  
  :deep(.swiper-pagination) {
    bottom: 0 !important;
  }
  
  :deep(.swiper-pagination-bullet) {
    background-color: #4b5563;
  }
  
  :deep(.swiper-pagination-bullet-active) {
    background-color: #2563eb;
  }
  </style>