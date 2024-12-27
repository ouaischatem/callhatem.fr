<script lang="ts" setup>
import frenchFlag from 'public/images/french-flag.png';
import englishFlag from 'public/images/english-flag.png';

const {locale, setLocale} = useI18n();

</script>

<template>
  <button
      aria-label="Change Language"
      @click="locale === 'fr' ? setLocale('en') : setLocale('fr')">
    <img
        :alt="locale === 'fr' ? 'Français' : 'English'"
        :src="locale === 'fr' ? frenchFlag : englishFlag"
        class="w-12 h-8 rounded-lg focus:outline-none"
    />
  </button>
</template>

<style scoped>

</style>