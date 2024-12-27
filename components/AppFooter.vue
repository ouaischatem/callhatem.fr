<script lang="ts" setup>
const {t} = useI18n();

const socialLinks = [
  {id: "github", title: 'GitHub', url: 'https://github.com/ouaischatem'},
  {id: "linkedin", title: 'LinkedIn', url: 'https://www.linkedin.com/in/hatem-obeidine'}
];
</script>

<template>
  <footer class="p-10">
    <div
        class="flex flex-row justify-between items-center text-lightblue-100 mx-auto max-w-screen-lg text-xs font-medium">
      <div class="flex flex-col gap-x-2">
        <span>contact@callhatem.fr</span>
        <span>Auto-entrepreneur (SIRET: 930 362 546)</span>
        <span class="uppercase">© {{ new Date().getFullYear() }} Hatem OBEIDINE 🔥</span>
      </div>
      <div class="flex flex-row gap-x-2">
        <div v-for="social in socialLinks" :key="social.title"
             class="w-10 h-10 border border-ebony-600 bg-ebony-950 rounded-full flex justify-center items-center">
          <a :href="social.url" class="flex justify-center" rel="noopener noreferrer" target="_blank">
            <img :src="`https://skillicons.dev/icons?i=${social.id}`" alt="Social icon" class="w-7 rounded-full"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>