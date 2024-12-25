<script setup lang="ts">
const { t } = useI18n();

const socialLinks = [
  { name: 'GitHub', icon: 'entypo-social:github', url: 'https://github.com/ouaischatem' },
  { name: 'LinkedIn', icon: 'entypo-social:linkedin-with-circle', url: 'https://www.linkedin.com/in/hatem-obeidine' }
];
</script>

<template>
  <footer class="bg-ebony-950 p-10">
    <div class="flex flex-row justify-between items-center text-lightblue-100 mx-auto max-w-screen-lg">
      <span>Copyright ©2024 Hatem OBEIDINE</span>
      <div class="flex flex-row gap-x-2">
        <div v-for="social in socialLinks" :key="social.name" class="w-10 h-10 border border-ebony-600 bg-ebony-950 rounded-full flex justify-center items-center">
          <a :href="social.url" target="_blank" rel="noopener noreferrer" class="flex justify-center">
            <Icon :name="social.icon" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>