<script lang="ts" setup>
import {EMAIL, FULL_NAME, SOCIALS, STATUS} from "~/constants/global";

const {t} = useI18n();
</script>

<template>
  <footer class="p-10">
    <div
        class="flex flex-row justify-between items-center text-lightblue-100 mx-auto max-w-screen-lg text-xs font-medium">
      <div class="flex flex-col gap-x-2">
        <span>{{ EMAIL }}</span>
        <span>{{ STATUS }}</span>
        <span class="uppercase">© {{ new Date().getFullYear() }} {{ FULL_NAME }} 🔥</span>
      </div>
      <div class="flex flex-row gap-x-2">
        <div v-for="social in SOCIALS" :key="social.name"
             class="w-10 h-10 border border-ebony-600 bg-ebony-950 rounded-full flex justify-center items-center">
          <a :href="social.url" class="flex justify-center" rel="noopener noreferrer" target="_blank">
            <img :src="`https://skillicons.dev/icons?i=${social.name.toLowerCase()}`" alt="Social icon"
                 class="w-7 rounded-full"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>