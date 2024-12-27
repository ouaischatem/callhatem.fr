<script lang="ts" setup>
import AppSectionTitle from "~/components/AppSectionTitle.vue";

const containerRef = ref(null)

const {t} = useI18n();
const testimonials = [
  {username: "Khemara P."},
  {username: "Maxime F."},
  {username: "Simon C."},
  {username: "Louis L."},
];
const swiper = useSwiper(containerRef, {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
</script>

<template>
  <section id="testimonials" class="px-4 pt-24">
    <AppSectionTitle>{{ t("testimonials.title") }}</AppSectionTitle>

    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="max-w-screen-lg mx-auto">
        <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="swiper-slide transition-transform duration-500 flex justify-center items-center cursor-pointer"
        >
          <AppCard
              class="p-6 text-left flex flex-col gap-y-4 bg-ebony-900 rounded-lg shadow-lg transition-all transform w-[350px] h-[300px] md:h-[350px]"
          >
            <div class="flex flex-col items-start gap-y-3 flex-grow">
              <p class="text-xs sm:text-sm text-gray-300 text-justify">
                {{ t("testimonials.customer" + (index) + ".testimonial") }}
              </p>
            </div>

            <div class="flex flex-row items-center gap-x-2 mt-auto">
              <img alt="User profile" class="w-10 h-10 rounded-full border-2 border-lightblue-100"
                   src="/images/user.png"/>

              <div class="flex flex-col justify-start">
                <h1 class="text-xs sm:text-sm font-bold text-white">
                  {{ testimonial.username }}
                </h1>
                <span class="text-xs text-gray-400">{{ t("testimonials.customer" + (index) + ".range") }}</span>
              </div>
            </div>
          </AppCard>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="pt-20 px-10">
      <AppCard class="flex flex-col max-w-xl py-8 mx-auto border shadow-sm border-white/30 md:p-5">
        <div class="flex flex-col items-center justify-center md:flex-row">
          <div class="flex gap-6">
            <Icon class="my-auto text-mustard text-yellow-300" name="material-symbols:star-rounded" size="70"/>
            <div class="flex flex-col items-end justify-end">
              <span class="inline-block text-5xl font-extrabold text-white">4.9</span>
              <span class="text-sm font-semibold text-white">{{ t("testimonials.global_mark") }}</span>
            </div>
          </div>
          <div class="flex w-20 h-[1px] md:w-[1px] md:h-20 bg-white/20 md:mx-8 mx-4 my-4">
          </div>
          <div class="flex gap-6">
            <Icon class="my-auto text-mustard text-mauve-300" name="ic:round-person" size="70"/>
            <div class="flex flex-col items-start justify-start">
              <span class="inline-block text-5xl font-extrabold text-white">25+</span>
              <span class="text-sm font-semibold text-white font-jakarta">{{ t("testimonials.customers") }}</span>
            </div>
          </div>
        </div>
      </AppCard>
    </div>
  </section>
</template>

<style scoped>
.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}

.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.85);
  opacity: 0.85;
}
</style>
