<template>
    <div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-svh align-middle m-4">
        <div class="flex flex-col items-center justify-center text-center" data-aos="fade-up">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 m-4 hover:text-blue-600 transition-colors duration-300">MY SKILL</h1>
            <div class="grid grid-cols-4 gap-10 m-4 text-center align-middle sm:grid-cols-4 md:grid-cols-7 w-full">
                <div class="text-center group brightness-75 hover:brightness-100 snap-x" :data-aos="`fade-up`" :data-aos-delay="(index * 100)" v-for="(skill, index) in skills" :key="skill.icon">
                    <div class="w-24 h-24 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 snap-center">
                        <NuxtImg :src="`/img/skills/${skill.icon}.svg`" :class="skill.class" class="w-full h-full" />
                    </div>
                    <p class="mt-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-semibold relative">
                        {{ skill.title }}
                        <span class="triangle"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    { icon: 'html', title: 'HTML', class: 'stroke-black' },
    { icon: 'css', title: 'CSS' },
    { icon: 'javascript', title: 'JavaScript' },
    { icon: 'jquery', title: 'Jquery' },
    { icon: 'bootstrap', title: 'Bootstrap' },
    { icon: 'nuxt', title: 'Nuxt.js' },
    { icon: 'vue', title: 'Vue.js' },
    { icon: 'PHP', title: 'PHP' },
    { icon: 'nodejs', title: 'Node.js' },
    { icon: 'express', title: 'Express.js' },
    { icon: 'mysql', title: 'MySQL' },
    { icon: 'postgresql', title: 'PostgreSQL' },
    { icon: 'git', title: 'Git' },
    { icon: 'postman', title: 'Postman' }
]
</script>

<style scoped>
.triangle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-100%) scale(0);
    top: 30px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #2563eb; /* blue-600 */
    transition: transform 0.3s ease-in-out;
}

.group:hover .triangle {
    transform: translateX(-50%) translateY(-100%) scale(1);
}

</style>