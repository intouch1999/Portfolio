<template>
<Layout>
    <div data-aos="zoom-in"
      class="container px-6 py-16 mx-auto">
        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-white -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-white md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl text-black font-medium tracking-tight ">{{about.name}} </p>
                    </div>

                    <p class="mt-4 text-base leading-relaxed  md:text-xl"> “{{about.description}}”.</p>
                </div>
            </div>
        </main>
    </div>
</Layout>
</template>

<script setup>
const about = useAbout().value
</script>
