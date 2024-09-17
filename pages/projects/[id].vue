<template>
  <section
    class="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center pt-24">
    <div class="container px-6 py-10 mx-auto md:w-5/6">
      <section class="bg-white rounded-2xl shadow-lg p-10  items-center " data-aos="zoom-in" data-aos-duration="1000">
        <div class="container mx-auto">
          <h1 data-aos="fade-up"
            class=" text-3xl sm:text-4xl lg:text-5xl font-bold text-black capitalize hover:text-yellow-400 transition-colors duration-300 tracking-wider">
            {{ project.name }}
          </h1>
        </div>

        <div class="container mx-auto">
          <p class="text-left mt-4 text-black text-md sm:text-lg lg:text-xl font-light" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="100">
            {{ project.desc }}
          </p>
        </div>

        <div class="container mx-auto">
          <h1
            class="text-xl text-black sm:text-2xl lg:text-3xl font-semibold capitalize hover:text-yellow-400 transition-colors duration-300 tracking-wider mt-6"
            data-aos="fade-up" data-aos-delay="200">
            Features
          </h1>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2" data-aos="fade-up">
              <div v-for="(feature, index) in project.fea" :key="index" 
                class="p-6 border rounded-xl shadow-md transition-all transform hover:scale-105 duration-300 hover:shadow-2xl bg-blue-50">
                <div class="md:flex md:items-start md:-mx-4">
                  <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M64 32C28.7 32 0 60.7 0 96V256 448c0 17.7 14.3 32 32 32s32-14.3 32-32V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z" />
                    </svg>
                  </span>

                  <div class="mt-4 md:mx-4 md:mt-0">
                    <h1 class="text-lg font-medium text-gray-700 capitalize">
                      {{ feature.label }}
                    </h1>

                    <p class="mt-3 text-gray-500">{{ feature.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
        <div class="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="400">
          <div class="mockup-code bg-primary text-primary-content w-full md:w-3/4 lg:w-1/2">
            <code data-aos="fade-up" data-aos-delay="400">
            <div class="flex items-center justify-center space-x-4 group transition-colors duration-300 tracking-wider">
            <svg
              class="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-yellow-400"
              fill="currentColor"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              <path
                d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
              />
            </svg>
            <h1
              data-aos="fade-up"
              class="text-2xl sm:text-2xl lg:text-3xl font-bold text-black capitalize group-hover:text-yellow-400"
              data-aos-delay="400"
            >
            Code Languages<span class="inline-block w-2 h-1 bg-black rounded-full blink-animation group-hover:bg-yellow-400"></span>
            </h1>
          </div>
          </code>
            <div class="grid grid-cols-2 md:flex md:flex-row justify-center mt-6 " data-aos="fade-up">
              <div class="flex flex-col items-center m-4 group" v-for="language in project.lang">
                <div class="p-1 bg-white rounded-full md:transition-transform md:transform md:hover:scale-125">
                  <NuxtImg :key="language"
                    class="w-5 h-5  m-2  rounded-full"
                    :src="`/img/skills/${language}.svg`" alt="project icon" />
                </div>

                <code
                  class="text-xs md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-2">
                {{ language }}
              </code>
              </div>
            </div>

          </div>
        </div>



        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16" 
          data-aos-delay="600">
            <div v-for="(img, index) in project.img" :key="index" data-aos="fade-up"
              class="relative group transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              @click="openModal(img)">
              <NuxtImg :src="`${img}`" alt="Project Image" 
                class="w-full h-70 object-cover rounded-lg shadow-xl transition-all duration-500 ease-in-out group-hover:shadow-2xl border bottom-2"
                loading="lazy" decoding="auto" />
              <div
                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg">
              </div>
            </div>
        </div>
      </section>
    </div>

    <ImgModel :imgSrc="selectedImg" :isOpen="isModalOpen" @close="closeModal" />
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const project = ref({});
const isModalOpen = ref(false);
const selectedImg = ref('');

watch(project, (newProject) => {
  if (newProject.name) {
    useHead({
      title: `Portfolio - ${newProject.name}`,
      meta: [
        { name: 'description', content: newProject.desc || 'Description of the project.' },
        { name: 'keywords', content: 'project, web development, frontend, backend' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { charset: 'UTF-8' },
      ]
    });
  }
}, { immediate: true });

const fetchProject = async () => {
  const id = route.params.id;
  const projects = useProjects().value.data;
  try{
    if (projects) {
      project.value = projects.find((proj) => proj.id === parseInt(id));
    } else {
      console.log('No projects found.');
    } 
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
  
};

const openModal = (img) => {
  selectedImg.value = img;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

onMounted(() => {
  fetchProject();
});
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink-animation {
  animation: blink 1s infinite;
  /* 1 วินาทีสำหรับการกระพริบซ้ำ */
}
</style>
