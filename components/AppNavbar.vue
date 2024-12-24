<script setup lang="ts">
import AppLangToggle from "~/components/AppLangToggle.vue";
const { t } = useI18n();

const navItems = ref([
  { id: 'about', label: 'nav.about' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'testimonials', label: 'nav.testimonials' },
  { id: 'contact', label: 'nav.contact' }
]);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <nav class="flex justify-center pt-6 sm:hidden">
    <AppLangToggle />
  </nav>

  <nav class="gap-x-4 items-center justify-center px-6 py-4 bg-ebony-900 text-white border border-ebony-600 rounded-xl max-w-lg mx-auto sm:flex hidden">
    <div
        v-for="item in navItems"
        :key="item.id"
        class="text-lightblue-50 hover:text-lightblue-200 cursor-pointer"
        @click="scrollToSection(item.id)"
    >
      {{ t(item.label) }}
    </div>

    <AppLangToggle />
  </nav>
</template>

<style scoped>
</style>