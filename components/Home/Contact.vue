<template>
    <div>
        <div class="flex flex-col">
              <p v-for="(detail, index) in about.details" :key="index" class="text m-4">
                {{ detail.label }}: {{ detail.value }}
              </p>
              <div>
              <span> GITHUB: </span>
              <a :href="about.Github" class="text-black m-4 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
{{ about.Github }}
</a></div>
            </div>
    </div>
</template>

<script setup>
const about = useAbout().value
</script>
