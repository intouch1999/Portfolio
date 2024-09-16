<template>
    <Layout>
        <div data-aos="fade-up" class="bg-white shadow-lg rounded-2xl border-2 p-6 hover:shadow-xl transition-shadow duration-300 w-full ">
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center text-center group text-blue-500 hover:text-yellow-600 transition-colors duration-300 md:py-8">
                    <div class="flex flex-row justify-center items-center  align-middle mb-2 ">

                    
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                    <h1 class="ml-2 text-2xl font-semibold md:text-3xl ">Work Experiences</h1>  
                </div>    
                    <div class="flex flex-row mb-4">
                <span class="inline-block w-48 h-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                    </div>

                </div>
            <ol class="relative border-s border-gray-200">
                <!-- Main Work Experience -->
                <li v-for="experience in experiences.Main_Work" class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ">
                        <svg class="w-4 h-4 text-blue-800 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 group">
                        <span class="group-hover:text-blue-600 transition-colors duration-300">{{ experience.job_title}}</span>
                        <span
                            class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 ">Main Work</span>
                    </h3>
                    <h4 class="text-base font-normal text-gray-500 mb-1 hover:text-blue-500 transition-colors duration-300">{{ experience.company }}</h4>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 hover:text-blue-400 transition-colors duration-300">{{ experience.date }}</time>
                    <ul>
                        <li v-for="(desc, descIndex) in experience.description" :key="descIndex"
                            class=" font-normal text-sm text-gray-500 hover:text-gray-700 
                                   transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                            {{ desc }}
                        </li>
                    </ul>
                </li>

                <!-- Freelance Experience -->
                <li v-for="experience in experiences.Other_Work" class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
                        <svg class="w-4 h-4 text-blue-800 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 group">
                        <span class="group-hover:text-blue-600 transition-colors duration-300">{{ experience.job_title}}</span>
                        <span
                            class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 ">Programming</span>
                    </h3>
                    <!-- Projects -->
                    <div v-for="(project, projectIndex) in experience.project" :key="projectIndex" class="mb-4 group">
                        <NuxtLink :to="`/projects/${project.id}`"
                            class="text-md font-semibold text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {{ project.label }}</NuxtLink>
                            
                        <p class="font-normal text-sm text-gray-500 group-hover:text-gray-700 
                                  transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
                            {{ project.value }}
                        </p>
                    </div>
                </li>
            </ol>
</div>
        </div>
</Layout>
</template>

<script setup>

const experiences = useExperience()


</script>

<style scoped></style>