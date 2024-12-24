<script setup lang="ts">
const { t } = useI18n();

const projects = ref([
  {
    id: "noctines",
    link: "https://www.lobservatoiredelanuit.fr/noctines",
    technologies: ['tailwind', 'ts', 'nuxt', 'mongodb'],
  },
  {
    id: "pizzadipasta",
    link: "https://pizzadipasta.com",
    technologies: ['laravel', 'tailwind', 'php', 'mysql'],
  },
  {
    id: "copyexpert",
    link: "https://copyexpert.com",
    technologies: ['tailwind', 'mongodb', 'figma', 'ts', 'nuxt', 'supabase'],
  },
  {
    id: "medialerts",
    link: "https://medialerts.com",
    technologies: ['react', 'tailwind', 'figma', 'ts', 'nest', 'mongodb'],
  },
]);
</script>

<template>
  <section id="projects" class="bg-ebony-950 text-white min-h-screen text-center px-4">
    <h1 class="text-2xl sm:text-4xl font-bold mb-8">
      <span v-html="t('projects.title')"></span>
    </h1>
    <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      <AppCard
          v-for="project in projects"
          :key="project.id"
          class="px-4 py-6 text-left flex flex-col gap-y-2 bg-ebony-900 rounded-lg shadow-lg h-full"
      >
        <img
            :src="`/images/projects/${project.id}.png`"
            :alt="project.id"
            class="w-full h-auto rounded-md object-cover"
        />
        <h1 class="text-lg sm:text-xl font-bold mt-3">
          {{ t("projects." + project.id + ".title") }}
        </h1>
        <p class="text-sm sm:text-base text-gray-400 flex-1">
          {{ t("projects." + project.id + ".description") }}
        </p>
        <div class="flex flex-row justify-between items-center mt-auto">
          <div class="flex flex-row flex-wrap">
            <div
                v-for="technology in project.technologies"
                :key="technology"
                class="w-10 h-10 border border-ebony-600 bg-ebony-950 rounded-full flex justify-center items-center"
            >
              <img
                  :src="`https://skillicons.dev/icons?i=${technology}`"
                  :alt="technology"
                  class="w-6"
              />
            </div>
          </div>
          <a
              @click="navigateTo(project.link, { external: true, open: { target: '_blank' } });"
              class="gap-x- text-right text-sm sm:text-base cursor-pointer flex items-center text-mauve-300 hover:border-b border-mauve-300 "
          >
            <span>{{ t('projects.view_more') }}</span>
            <Icon name="ic:sharp-arrow-outward" size="20" class="mt-0.5" />
          </a>
        </div>
      </AppCard>
    </div>
  </section>
</template>

<style scoped>
</style>