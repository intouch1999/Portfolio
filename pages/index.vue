<template>
  <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ">
    <!-- <nav>
        <ul class="flex space-x-4">
          <li><a href="#profile" class="text-blue-500 hover:underline">Profile</a></li>
          <li><a href="#about" class="text-blue-500 hover:underline">About</a></li>
          <li><a href="#experience" class="text-blue-500 hover:underline">Experience</a></li>
          <li><a href="#skills" class="text-blue-500 hover:underline">Skills</a></li>
          <li><a href="#education" class="text-blue-500 hover:underline">Education</a></li>
        </ul>

      
      </nav> -->
    <Sidebar :sections="sections" class="z-50" />
    <main>
      <div class="mx-auto max-w-7xl bg-blue-100 border-2 rounded-xl">        
        <component
    v-for="(section, index) in sections"
    :is="section.component"
    :id="section.id"
    :key="index"
    class="mb-8"
  />
      </div>
    </main>
  </div>
</template>



<script setup>
import HomeAbout from '~/components/Home/About.vue'
import HomeExperience from '~/components/Home/Experience.vue'
import HomeSkill from '~/components/Home/Skill.vue'
import HomeEducation from '~/components/Home/Education.vue'
import HomeContact from '~/components/Home/Contact.vue'

// Array of components and their respective IDs
const sections = [
{ id: 'About me', component: HomeAbout },
{ id: 'Experiences', component: HomeExperience },
{ id: 'Educations', component: HomeEducation },
{ id: 'Skills', component: HomeSkill },
{ id: 'Contact', component: HomeContact },

]
</script>
