<script setup lang="ts">
const { t } = useI18n();
const redirectToEmail = () => {
  navigateTo("https://www.linkedin.com/in/hatem-obeidine/", { external: true, open: {target: '_blank'} });
};
</script>

<template>
  <div class="relative bg-ebony-950 text-white h-screen overflow-hidden">
    <div class="flex flex-col items-center justify-center h-full gap-y-6 px-6 sm:px-12">
      <AppNavbar/>
      <p class="text-xs sm:text-sm text-link-water-100 uppercase tracking-[.25em]">
        Hatem Obeidine
      </p>

      <p class="text-4xl sm:text-6xl font-bold text-white text-center">
        {{ t('header.description') }}
        <br />
        <span class="text-mauve-300 font-bold">{{ t('header.innovative') }}</span>
      </p>

      <p class="text-lg sm:text-xl text-lightblue-100 text-center">
        {{ t('header.transformation') }}
      </p>

      <AppButton @click="redirectToEmail">
        {{ t('button.contact') }}
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
</style>