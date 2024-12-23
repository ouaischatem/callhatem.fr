<script setup lang="ts">

</script>

<template>
  <button class="px-6 py-4 bg-gradient-to-r from-ebony-500 to-ebony-900 text-white rounded-xl shadow-sm shadow-gray-700 flex flex-row gap-x-3 items-center justify-center sm:w-auto w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:opacity-90">
    <slot />
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z" fill="white"/>
    </svg>
  </button>
</template>

<style scoped>

</style>