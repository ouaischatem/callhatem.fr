<script lang="ts" setup>
const {t} = useI18n();
import {PROJECTS} from '~/constants/projects';

const sectionVisible = ref(false);

onMounted(() => {
  const section = document.querySelector('#projects');
  if (section) {
    const observer = new IntersectionObserver(([entry]) => {
      if (sectionVisible.value) return;
      sectionVisible.value = entry.isIntersecting;
    }, {threshold: 0.2});

    observer.observe(section);
  }
});
</script>

<template>
  <section
      id="projects"
      class="pt-16 px-4"
  >
    <AppSectionTitle>{{ t("projects.title") }}</AppSectionTitle>
    <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
      <AppCard
          v-for="project in PROJECTS"
          :key="project.id"
          :class="{'slide-from-left': sectionVisible, 'invisible': !sectionVisible}"
          class="px-4 py-6 text-left flex flex-col gap-y-2 bg-ebony-900 rounded-lg shadow-lg h-full"
      >
        <img
            :alt="project.id"
            :src="`/images/projects/${project.id}.png`"
            class="w-full h-auto rounded-md object-cover"
        />
        <h1 class="text-white text-lg sm:text-xl font-bold mt-3">
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
                  :alt="technology"
                  :src="`https://skillicons.dev/icons?i=${technology}`"
                  class="w-6"
              />
            </div>
          </div>
          <a
              class="text-right text-sm sm:text-base cursor-pointer flex items-center text-mauve-300 hover:border-b border-mauve-300 "
              @click="navigateTo(project.link, { external: true, open: { target: '_blank' } });"
          >
            <span>{{ t('projects.view_more') }}</span>
            <Icon class="mt-0.5" name="ic:sharp-arrow-outward" size="20"/>
          </a>
        </div>
      </AppCard>
    </div>
  </section>
</template>

<style scoped>
</style>