<template>
   <Layout>
        <div data-aos="fade-up"
            class="bg-white border-2 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 w-full">
            <div class="flex flex-col items-center justify-center text-center my-4 md:my-8 md:py-8 group hover:text-yellow-600 text-blue-500 transition-colors duration-300">
                <div
                    class="flex flex-row justify-center items-center  ">
                    <div class="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                    </div>
                    <h1 class=" text-2xl font-semibold  md:text-3xl  ">Educations</h1>      

                </div>
                <div>
                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                    <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                    <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
                </div>
            </div>
            <div class="flex flex-col md:items-center">
            <div class=" md:w-1/2">
                <div v-for="(education, index) in education.data" :key="index"
                    class="mb-10"><div class=" bg-gray-100 rounded-xl">
                    <div class=" px-8 py-8 flex">
                        

                        
                        <span class="flex items-center justify-center w-6 h-6 bg-blue-500 text-black rounded-full mr-4">
                        </span>
                        <div>
                            <h3
                                class="mb-1 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                {{ education.name }}
                            </h3>
                            <h4
                                class="text-base font-normal text-gray-900 mb-1 hover:text-blue-500 transition-colors duration-300">
                                {{ education.branch }}
                            </h4>
                            <h4
                                class="text-base font-normal text-gray-500 mb-1 hover:text-blue-500 transition-colors duration-300">
                                {{ education.degree }}
                            </h4>
                            <time
                                class="block mb-2 text-sm font-normal leading-none text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                {{ education.duration }}
                            </time>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</Layout>
</template>

<script setup>
const education = useEducation().value
</script>