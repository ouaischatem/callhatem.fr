<script lang="ts" setup>
const {t} = useI18n();
const selectedCategory = ref("frontEnd");

const categories = {
  frontEnd: {
    title: "Front-End",
    stacks: ["nuxt", "vue", "tailwind", "react", "css", "html", "typescript", "javascript"]
  },
  backEnd: {
    title: "Back-End",
    stacks: ["docker", "nodejs", "php", "nest", "express", "java", "python", "kotlin"]
  },
  database: {
    title: "Bases de données",
    stacks: ["mysql", "postgresql", "mongodb", "supabase", "sqlite", "redis"]
  },
  tools: {
    title: "IDE et outils",
    stacks: ["vscode", "sublime", "idea", "eclipse", "figma", "github", "gitlab", "vercel"]
  },
};
</script>

<template>
  <section id="skills" class="bg-ebony-950 text-white text-center pt-24">
    <h1 class="text-2xl sm:text-3xl font-bold mb-8">{{ t("skills.title") }}</h1>

    <div class="flex justify-center gap-4 mb-8 flex-wrap">
      <button
          v-for="(category, key) in categories"
          :key="key"
          :class="[
      'w-44 h-12 px-6 py-3 text-sm font-medium rounded-lg transition-all ease-in-out duration-300',
          selectedCategory === key
            ? 'bg-mauve-300 text-white shadow-lg transform scale-105'
            : 'bg-ebony-800 text-gray-300 hover:bg-mauve-300 hover:text-white hover:shadow-md'
        ]"
          @click="selectedCategory = key"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mx-auto max-w-2xl px-4 py-4">
      <AppCard
          v-for="technology in categories[selectedCategory].stacks"
          :key="technology.id"
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