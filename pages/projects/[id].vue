<template>
  <section class="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center pt-24">
    <div class="container px-6 py-10 mx-auto text-center">
      <section class="bg-white rounded-2xl shadow-lg p-10" data-aos="zoom-in" data-aos-duration="1000">
        <div class="container mx-auto">
          <h1
            data-aos="fade-up"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-black capitalize hover:text-yellow-400 transition-colors duration-300 tracking-wider"
          >
            {{ project.name }}
          </h1>
        </div>

        <div class="container mx-auto">
          <p class="mt-4 text-black text-md sm:text-lg lg:text-xl font-light" data-aos="fade-up" data-aos-delay="100">
            {{ project.desc }}
          </p>
        </div>

        <div class="container mx-auto">
          <h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold capitalize hover:text-yellow-400 transition-colors duration-300 tracking-wider mt-6" data-aos="fade-up" data-aos-delay="200">
            Features
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2" data-aos="fade-up" data-aos-delay="300">
            <div
              v-for="(feature, index) in project.fea"
              :key="index"
              class="p-6 border rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div class="md:flex md:items-start md:-mx-4">
                <span
                  class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64 32C28.7 32 0 60.7 0 96V256 448c0 17.7 14.3 32 32 32s32-14.3 32-32V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"
                    />
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
        <div
          class="flex items-center justify-center space-x-4 group transition-colors duration-300 tracking-wider mt-10"
        >
          <svg
            class="w-12 h-12 text-black group-hover:text-yellow-400"
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
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-black capitalize group-hover:text-yellow-400"
            data-aos-delay="400"
          >
            Languages
          </h1>
        </div>

        <div class="flex flex-wrap justify-center mt-6" data-aos="fade-up" data-aos-delay="500">
          <div
            class="flex flex-col items-center m-4"
            v-for="language in project.lang"
          >
            <img
              :key="language"
              class="w-10 h-10 m-4 transition-transform transform hover:scale-110"
              :src="`/img/skills/${language}.svg`"
              alt="project icon"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16" data-aos="fade-up" data-aos-delay="600">
          <ClientOnly>
            <div
              v-for="(img, index) in project.img"
              :key="index"
              class="relative group transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              @click="openModal(img)"
            >
              <NuxtImg
                :src="img"
                alt="Project Image"
                class="w-full h-80 object-cover rounded-lg shadow-xl transition-all duration-500 ease-in-out group-hover:shadow-2xl"
                loading="lazy"
                decoding="auto"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg"
              >
              </div>
            </div>
          </ClientOnly>
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

const fetchProject = async () => {
  const id = route.params.id;
  const projects = useProjects().value.data;
  project.value = projects.find((proj) => proj.id === parseInt(id));
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
</style>
