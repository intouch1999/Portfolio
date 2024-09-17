<template>
    <Layout>
        <div data-aos="fade-up" class="bg-white shadow-lg rounded-2xl border-2 p-6 hover:shadow-xl transition-shadow duration-300 w-full ">
          <div class="flex flex-col items-center justify-center text-center w-full" data-aos="fade-up">
            <div class="text-center mb-4 group text-blue-500 transition-colors hover:text-yellow-600 duration-300">
              <div class="flex items-center justify-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6  mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
              <h1 class="ml-2 text-2xl font-semibold  md:text-3xl ">IT-Skills</h1>     
            </div> 
            <span class="inline-block w-24 h-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
            </div>
            <div class="flex flex-col items-center lg:flex-row gap-x-24 w-full">
            <NuxtImg src="/img/itsupport.png" alt="IT-Support" class="mb-4 w-1/2 mx-auto my-auto h-1/2 object-cover" />
            <div class="flex flex-col  items-start justify-center text-left w-full ">
            <li class="list-disc list list-inside mb-2 group" v-for="(ITSkill , title) in ITSkill.data.skills" :key="title">
                <span class="font-bold text-black group-hover:text-yellow-600 mr-2 transform group-hover:translate-x-2 transition-all duration-300 ease-in-out" >{{ title }} </span>
                <span class="text-gray-500 inline-block transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out">{{ ITSkill }}</span>
            </li>
            </div>
            </div>
    
      
          </div>
          </div>
    </Layout>
        
      </template>
      
      <script setup>
      
      const ITSkill = useITSkill();
      </script>
      
      <style scoped>


      </style>