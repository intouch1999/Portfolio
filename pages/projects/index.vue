<template>
    <section  class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-screen md:flex md:items-center md:justify-center">
        <div  class="container px-6 py-10 mx-auto text-center">
            <h1 data-aos="flip-left" data-aos-duration="1000"
                class="text-5xl font-bold text-white capitalize hover:text-yellow-400 transition-colors duration-300 tracking-wider">
                Projects</h1>

            <div 
                class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2 justify-center mx-auto">
                <NuxtLink v-for="(project, projectIndex) in projects.data" :key="projectIndex"  data-aos="zoom-in" data-aos-duration="1000"
                    :to="`/projects/${project.id}`"
                    class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300 opacity-90"
                    :style="{ backgroundImage: `url(/intouch-code/${project.img[0]})` }"
                    
                    >
                    <div 
                        class=" flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <h2 class="mt-4 text-xl font-semibold text-white capitalize">{{ project.name }}</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase">Enter</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = useProjects();
useHead({
  title: 'Portfolio - Projects',
  meta: [
  { name: 'description', content: 'This is a detailed description of the project, showcasing my skills in web development.' },
  { name: 'keywords', content: 'project, web development, frontend, backend' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  { charset: 'UTF-8' },
  ]
})
</script>
