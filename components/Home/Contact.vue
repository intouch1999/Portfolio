<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle m-4 ">
        <div data-aos="fade-up" class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
            <div class="flex flex-col items-center justify-center text-center">
                <h1 data-aos="fade-down" class="text-3xl font-bold tracking-tight text-gray-900 m-4 hover:text-blue-600 transition-colors duration-500">
                    contacts
                </h1>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div data-aos="fade-right" class="col-span-2 md:col-start-2 md:col-span-4 m-4">
                    <div class="flex flex-col">
                        <p v-for="(detail, index) in about.details" :key="index" class="text m-4 hover:text-blue-500 transition-colors duration-500">
                            {{ detail.label }}: {{ detail.value }}
                        </p>

                        <div data-aos="fade-left" class="text m-4">
                            <span>GITHUB: </span>
                            <a :href="about.Github" class="text-black hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                {{ about.Github }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const about = useAbout().value
</script>
