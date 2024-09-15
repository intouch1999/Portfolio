<template>
<Layout>
    <div data-aos="zoom-in"
      class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
      <div class="flex flex-col items-center justify-center text-center md:py-8">
          <h1 class="mt-2 text-2xl font-semibold text-blue-500 md:text-3xl hover:text-blue-600 transition-colors duration-300">{{ about.about }}</h1>      
        <div class="flex flex-col md:flex-row items-center justify-center w-full">
          <div class="basis-full md:basis-1/2 lg:basis-3/4 m-4">
            <div data-aos="fade-right" class="transition-all duration-500 hover:scale-105">
              <p class="text text-justify indent-8 p-4 hover:text-blue-500">
                {{ about.description }}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
</Layout>
</template>

<script setup>
const about = useAbout().value
</script>
