<template>
  <div class="flex flex-col items-center mt-[343px]">
    <redberry-logo />

    <router-link
      to="/identify"
      class="mt-[101px] flex flex-col items-center text-[30px]"
    >
      <h1 class="font-tbc font-thin">კითხვარის</h1>
      <h1 class="font-tbc font-thin">დაწყება</h1>
    </router-link>
  </div>
</template>

<script>
import RedberryLogo from "@/assets/svg/redberry-logo.vue";

export default {
  components: {
    RedberryLogo,
  },
};
</script>
