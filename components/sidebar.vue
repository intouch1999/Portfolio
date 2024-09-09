<template>
    <div v-show="isMdOrLarger" class="relative h-32 w-32 z-10">
      <div class="fixed inset-y-0 right-0 w-16 z-10">
        <aside class="fixed z-10 items-center h-screen mr-10 hidden md:flex">
          <nav class="flex flex-1 flex-col gap-y-4 pt-10">
            <a v-for="section in sections" :key="section.id" :href="'#' + section.id"
               :class="[
                 'group relative rounded-xl p-2 text-blue-600 transition-colors duration-200',
                 activeSection === section.id ? 'bg-yellow-600 text-white' : 'bg-blue-600 hover:bg-blue-800'
               ]">
              <div class="absolute inset-y-0 right-8 hidden items-center group-hover:flex">
                <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                  <div class="absolute inset-y-0 -right-1 flex items-center">
                    <div class="h-2 w-2 rotate-45 bg-white"></div>
                  </div>
                  {{ section.id }}
                </div>
              </div>
            </a>
          </nav>
        </aside>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const props = defineProps({
    sections: {
      type: Array,
      required: true
    }
  })
  
  const activeSection = ref('')
  
  onMounted(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }
  
    const observer = new IntersectionObserver(observerCallback, observerOptions)
  
    props.sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })
  
    return () => {
      props.sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) observer.unobserve(element)
      })
    }
  })
  
  watch(() => window.location.hash, (newHash) => {
    if (newHash) {
      activeSection.value = newHash.slice(1)
    }
  })

const isMdOrLarger = ref(false)

const checkScreenSize = () => {
  isMdOrLarger.value = window.innerWidth >= 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
  </script>