<script setup lang="ts">
import frenchFlag from 'public/images/french-flag.png';
import englishFlag from 'public/images/english-flag.png';

const { locale, setLocale } = useI18n();

</script>

<template>
  <button
      @click="locale === 'fr' ? setLocale('en') : setLocale('fr')"
      aria-label="Change Language">
    <img
        :src="locale === 'fr' ? frenchFlag : englishFlag"
        :alt="locale === 'fr' ? 'Français' : 'English'"
        class="w-12 h-8 rounded-lg focus:outline-none"
    />
  </button>
</template>

<style scoped>

</style>