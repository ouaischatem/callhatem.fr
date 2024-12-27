<script lang="ts" setup>
const {t} = useI18n();

const redirect = () => {
  navigateTo("https://www.linkedin.com/in/hatem-obeidine/", {external: true, open: {target: '_blank'}});
};
</script>

<template>
  <section
      id="contact"
      class="pt-16 px-12"
  >
    <AppSectionTitle>{{ t("steps.title") }}</AppSectionTitle>
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AppCard
          v-for="step in 3"
          :key="step"
          class="flex flex-col items-center gap-y-4 bg-ebony-900 rounded-lg shadow-lg h-[400px] p-6 text-center"
      >
        <img
            :alt="step"
            :src="`/images/steps/step${step}.png`"
            class="w-14 h-14 rounded-md object-cover"
        />
        <AppCard class="mt-5 bg-ebony-900 px-3 py-1.5 text-sm text-mauve-300 font-medium">
          {{ t("steps.step") + ` ${step}` }}
        </AppCard>
        <h1 class="text-white text-lg sm:text-xl lg:text-2xl font-bold mt-3 text-center">
          {{ t("steps.step" + step + ".title") }}
        </h1>
        <p class="text-sm text-gray-400 flex-1 text-center">
          {{ t("steps.step" + step + ".description") }}
        </p>
      </AppCard>
    </div>

    <div class="flex flex-col items-center justify-center gap-y-6 px-6 pt-14 pb-14">
      <p class="text-2xl sm:text-3xl font-bold text-white text-center">
        {{ t('steps.contact.ready') }}
        <br/>
        <span class="text-mauve-300">{{ t('steps.contact.levelUp') }}</span>
      </p>

      <p class="text-sm text-lightblue-100 text-center">
        {{ t('steps.contact.sub_title') }}
      </p>

      <AppButton class="text-sm" @click="redirect">{{ t('steps.contact.quote') }}</AppButton>
    </div>
  </section>
</template>

<style scoped>
</style>