<script lang="ts" setup>
const {t} = useI18n();
import {SKILLS} from '~/constants/skills';

const selectedCategory = ref("frontEnd");
const stacks = computed(() => {
  const selectedSkill = SKILLS.find(skill => skill.id === selectedCategory.value);
  return selectedSkill ? selectedSkill.stacks : [];
});
</script>

<template>
  <section id="skills" class="pt-24">
    <AppSectionTitle>{{ t("skills.title") }}</AppSectionTitle>

    <div class="flex justify-center gap-4 mb-8 flex-wrap">
      <button
          v-for="(category, key) in SKILLS"
          :key="key"
          :class="[
      'w-44 h-12 px-6 py-3 text-sm font-medium rounded-lg transition-all ease-in-out duration-300',
          selectedCategory === category.id
            ? 'bg-mauve-300 text-white shadow-lg transform scale-105'
            : 'bg-ebony-800 text-gray-300 hover:bg-mauve-300 hover:text-white hover:shadow-md'
        ]"
          @click="selectedCategory = category.id"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mx-auto max-w-2xl px-4 py-4">
      <AppCard
          v-for="technology in stacks"
          :key="technology"
          class="p-3 text-left flex flex-col gap-y-4 bg-ebony-900 border shadow-sm border-white/30 rounded-lg transition-all transform"
      >
        <div class="flex flex-row items-center gap-x-3 mt-auto">
          <div class="w-12 h-12 border border-ebony-600 bg-ebony-950 rounded-full flex justify-center items-center">
            <img :src="`https://skillicons.dev/icons?i=${technology}`" alt="Technology icon"
                 class="w-9 h-9 rounded-full"/>
          </div>
          <div class="flex flex-col justify-start">
            <h3 class="text-sm sm:text-base font-bold text-white">{{ t("skills.stacks." + technology + ".title") }}</h3>
            <span class="text-xs sm:text-sm text-gray-400">{{
                t("skills.stacks." + technology + ".description")
              }}</span>
          </div>
        </div>
      </AppCard>
    </div>
  </section>
</template>