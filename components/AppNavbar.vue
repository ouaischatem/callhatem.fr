<script setup lang="ts">
import frenchFlag from '@/assets/images/french-flag.png';
import englishFlag from '@/assets/images/english-flag.png';

const { locale, setLocale } = useI18n();
</script>

<template>
  <div class="flex gap-4 items-center justify-center">
    <button
        @click="locale === 'fr' ? setLocale('en') : setLocale('fr')"
        aria-label="Change Language">
      <img
          :src="locale === 'fr' ? frenchFlag : englishFlag"
          :alt="locale === 'fr' ? 'Français' : 'English'"
          class="w-12 h-8 border border-mauve-300 rounded-lg focus:outline-none"
      />
    </button>
  </div>
</template>

<style scoped>
</style>