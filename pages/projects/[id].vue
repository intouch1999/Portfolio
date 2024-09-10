<template>
  <section  class="bg-purple-700 pt-10 md:flex md:items-center md:justify-center">
    <div data-aos="fade-up" class="container px-6 py-10 mx-auto text-center">
      <h1  data-aos="fade-up"
        class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl hover:text-blue-500 transition-colors duration-300"
      >
      {{ project.name }}
      </h1>
      <p>{{ project.description }}</p>
      <div class="grid grid-cols-1 gap-8 mt-8  " >
        <ClientOnly>
          <NuxtImg data-aos="fade-up" v-for="(img, index) in project.img" :key="index"
            class="w-full md:w-3/4 text-center rounded-xl cursor-pointer justify-self-center"
            :src="img"
            alt=""
            loading="lazy"
            ismap=""
            decoding="auto"
            @click="openModal(img)"
          />
        </ClientOnly>
        
      </div>
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
