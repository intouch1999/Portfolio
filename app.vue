<template>
  <div>
<NuxtPage/>
  </div>
</template>

<style>
  .fade-in-element {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: calc(var(--stagger) * 10ms);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>