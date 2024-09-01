<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle m-8 ">
      <div data-aos="fade-up" class="flex flex-col items-center justify-center text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 m-4">{{ about.about }}</h1>
        <div class="flex flex-col md:flex-row items-center justify-center w-full">
          <div class="basis-full md:basis-1/3 m-4">
            <div class="flex flex-col">
              <p v-for="(detail, index) in about.details" :key="index" class="text m-4">
                {{ detail.label }}: {{ detail.value }}
              </p>
              <a :href="about.Github" class="text-black m-4" target="_blank" rel="noopener noreferrer">GITHUB: {{ about.Github }}</a>
            </div>
          </div>
          <div class="basis-full md:basis-1/2 m-4">
            <p class="text text-justify indent-8">{{ about.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const about = useAbout().value
  </script>
  