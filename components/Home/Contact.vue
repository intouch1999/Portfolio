<template>
<Layout>

        <div data-aos="fade-up" class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
    <div class="container px-6 py-12 mx-auto">
        <div class="text-center group text-blue-500 transition-colors hover:text-yellow-600 duration-300">
            <h1 class="mt-2 text-2xl font-semibold  md:text-3xl">Contact</h1>            
            <span class="inline-block w-24 h-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full group-hover:bg-yellow-600 duration-300"></span>

        </div>
        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-3 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">{{ about.details[1].label }}</h2>
                <a :href="`mailto:${about.details[1].value}`" class="mt-2 text-blue-500 hover:text-yellow-300 transition-colors duration-300">
                    {{ about.details[1].value }}
                </a>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">{{ about.details[3].label }}</h2>
                <a href="https://maps.app.goo.gl/AnTmNc1bMgdp8fa56" class="mt-2 text-blue-500 hover:text-yellow-300 transition-colors duration-300">{{ about.details[3].value }}</a>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">Phone</h2>
                <a :href="`tel:${about.details[2].value}`" class="mt-2 text-blue-500 hover:text-yellow-300 transition-colors duration-300">{{ about.details[2].value }}</a>
            </div>
        </div>
    </div>
        </div>
</Layout>

    
</template>

<script setup>
const about = useAbout().value
</script>
