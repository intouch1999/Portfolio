<template>
    <div>
      <h1>{{ project.name }}</h1>
      <img :src="project.img" alt="" />
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const project = ref({ name: '', img: '', description: '' });
  
  const fetchProject = async () => {
    // Simulate fetching data; replace this with actual data fetching logic
    const id = route.params.id;


  
    project.value = projects.find(proj => proj.id === parseInt(id));
  };
  
  onMounted(() => {
    fetchProject();
  });
  </script>
  