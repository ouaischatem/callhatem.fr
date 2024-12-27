<script lang="ts" setup>

</script>

<template>
  <button
      class="px-6 py-4 bg-gradient-to-r from-ebony-500 to-ebony-900 text-white rounded-xl shadow-sm shadow-gray-700 flex flex-row gap-x-1 items-center justify-center sm:w-auto w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-600 hover:opacity-90">
    <slot/>
    <Icon name="ic:sharp-arrow-outward" size="25"/>
  </button>
</template>

<style scoped>

</style>