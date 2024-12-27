<script setup lang="ts">
const { t } = useI18n();

const redirect = () => {
  navigateTo("https://www.linkedin.com/in/hatem-obeidine/", { external: true, open: {target: '_blank'} });
};
</script>

<template>
  <section
      id="contact"
      class="bg-ebony-950 text-white text-center pt-16 px-12"
  >
    <h1 class="text-2xl sm:text-4xl font-bold mb-8">
      <span>{{ t("steps.title") }}</span>
    </h1>
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AppCard
          v-for="step in 3"
          :key="step"
          class="flex flex-col items-center gap-y-4 bg-ebony-900 rounded-lg shadow-lg h-[400px] p-6 text-center"
      >
        <img
            :src="`/images/steps/step${step}.png`"
            :alt="step"
            class="w-14 h-14 rounded-md object-cover"
        />
        <AppCard class="mt-5 bg-ebony-900 px-3 py-1.5 text-sm text-mauve-300 font-medium">
          {{ t("steps.step") + ` ${step}` }}
        </AppCard>
        <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mt-3 text-center">
          {{ t("steps.step" + step + ".title") }}
        </h1>
        <p class="text-sm text-gray-400 flex-1 text-center">
          {{ t("steps.step" + step + ".description") }}
        </p>
      </AppCard>
    </div>

    <div class="flex flex-col items-center justify-center gap-y-6 px-6 pt-14 pb-14">
      <p class="text-2xl sm:text-3xl font-bold text-white text-center">
        Prêt à propulser votre projet
        <br />
        <span class="text-mauve-300 font-bold">à un niveau supérieur ?</span>
      </p>

      <p class="text-sm text-lightblue-100 text-center">
        Contactez-moi pour un devis gratuit et discutons de vos objectifs.
      </p>

      <AppButton @click="redirect" class="text-sm">Obtenir un devis</AppButton>
    </div>
  </section>
</template>

<style scoped>
</style>