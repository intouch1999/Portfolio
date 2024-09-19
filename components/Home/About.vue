<template>
<Layout>
    <div data-aos="zoom-in"
      class="container ">
        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-white border-2 shadow-lg -z-10 md:h-96 rounded-2xl"></div>
            
            <div class=" w-full p-6 bg-white border-2 shadow-lg md:border-0 md:shadow-none md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <NuxtImg class="mx-auto h-36 w-36 md:mx-6 rounded-full object-cover object-top shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="/img/intouch.jpg" alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-2xl text-black font-medium tracking-tight ">{{about.name}} </p>
                    </div>

                    <p class="mt-4 text-base md:text-lg leading-relaxed lg:text-xl"> “{{about.description}}”.</p>
                    <div class="lg:mt-4 flex justify-center md:justify-start">
                    <a href="/intouch-code/docs/intouch_resume.pdf" download aria-label="Download PDF Resume" class="md:mt-0 lg:w-1/3 lg:h-12 md:w-1/3 md:h-10 h-12 border-2 rounded-full w-1/2  mt-4 flex items-center justify-center text-white bg-red-600 hover:bg-red-500 text-center transition-transform duration-300 ease-in-out transform active:scale-95 active:shadow-inner">
                        <NuxtImg src="/img/pdf.svg" class="w-6 h-6 text-whit " />
                        <span class="text-base leading-relaxed md:text-sm ml-2">PDF</span>
                    </a>
                    <NuxtLink href="https://github.com/intouch1999" download aria-label="Download PDF Resume" class="md:mt-0 lg:w-1/3 lg:h-12 md:w-1/3 md:h-10 h-12 border-10 rounded-full w-1/2  mt-4 flex items-center justify-center text-white bg-gray-900 hover:bg-gray-700 text-center transition-transform duration-300 ease-in-out transform active:scale-95 active:shadow-inner">
                        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span class="text-base leading-relaxed md:text-sm ml-2">GITHUB</span>
                    </NuxtLink>
                </div>
                </div>
            </div>
        </main>
    </div>
</Layout>
</template>

<script setup>

const about = useAbout().value
</script>
