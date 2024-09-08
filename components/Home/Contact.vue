<template>
    <div
        class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle m-4 ">
        <div data-aos="fade-up"
            class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
            <div class="flex flex-col items-center justify-center text-center">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 m-4">contacts</h1>
            </div>
            <div class="basis-full md:basis-1/3 m-4">
                <div class="flex flex-col">
                    <p v-for="(detail, index) in about.details" :key="index" class="text m-4">
                        {{ detail.label }}: {{ detail.value }}
                    </p>
                    <div>
                        <span> GITHUB: </span>
                        <a :href="about.Github"
                            class="text-black m-4 hover:text-blue-500 transition-colors duration-300" target="_blank"
                            rel="noopener noreferrer">
                            {{ about.Github }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const about = useAbout().value
</script>
