<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle">
      <div class="flex flex-col items-center justify-center my-50 h-100 " >
        <NuxtImg 
          src="/img/personal.jpg"  
          sizes="100vw sm:50vw md:33vw lg:25vw"
          class="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        />
          <h1 v-for="(value, key) in profile" class="text-3xl font-bold tracking-tight text-gray-900">
            {{ value }}
          </h1>
      </div>
    </div>
  </template>
  
  <script setup>

  const profile = useProfile()


  </script>
  
  <style scoped>

  </style>