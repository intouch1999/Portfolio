<template>
 <Layout>
    <div data-aos="fade-up">
    <div class="flex flex-col items-center justify-center my-50 h-100 " >
      <NuxtImg
        src="/img/personal.jpg"  
         sizes="100vw sm:50vw md:33vw lg:25vw"
        class="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        :srcset="null"
        :alt="profile.name"
      />
        <h1 v-for="(value, key) in profile" class="text-3xl font-bold tracking-tight text-gray-900">
          {{ value }}
        </h1>
    </div>
  </div>    
  <svg class="w-6 h-6 text-gray-800 animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
</svg>
 </Layout>

</template>

<script setup>

const profile = useProfile()


</script>

<style scoped>

</style>