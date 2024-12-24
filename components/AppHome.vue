<script setup lang="ts">
const { t } = useI18n();
const redirect = () => {
  navigateTo("https://www.linkedin.com/in/hatem-obeidine/", { external: true, open: {target: '_blank'} });
};
</script>

<template>
  <div class="relative bg-ebony-950 text-white h-screen overflow-hidden">
    <img src="/images/vectors/grid.svg" alt="SVG Image" class="absolute w-full h-full object-cover opacity-75 pointer-events-none" />
    <img src="/images/vectors/spotlight.svg" alt="SVG Image" class="absolute left-0 pointer-events-none" />
    <img src="/images/vectors/spotlight.svg" alt="SVG Image" class="absolute right-0 scale-x-[-1] pointer-events-none" />

    <div class="absolute top-14 left-0 right-0 z-20">
      <AppNavbar />
    </div>
    <div class="flex flex-col items-center justify-center h-full gap-y-6 px-6 sm:px-12 z-10 relative">
      <p class="text-xs sm:text-sm text-link-water-100 uppercase tracking-[.25em]">
        Hatem Obeidine
      </p>

      <p class="slide-once text-4xl sm:text-6xl font-bold text-white text-center">
        {{ t('header.description') }}
        <br />
        <span class="text-mauve-300 font-bold">{{ t('header.innovative') }}</span>
      </p>

      <p class="text-lg sm:text-xl text-lightblue-100 text-center">
        {{ t('header.transformation') }}
      </p>

      <AppButton @click="redirect">
        {{ t('button.contact') }}
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideInWithFade {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-once {
  display: inline-block;
  animation: slideInWithFade 1s ease-out;
}
</style>