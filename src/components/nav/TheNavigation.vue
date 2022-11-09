<template>
  <nav>
    <div class="flex items-center">
      <router-link to="/" class="flex-1">
        <redberry-title />
      </router-link>
      <h1 class="font-anonymous text-4xl"><slot></slot>/4</h1>
    </div>
    <div class="mt-[23px] mb-[42px] w-full h-[1.8px] bg-black flex-2"></div>
  </nav>
</template>

<script>
import RedberryTitle from "@/assets/svg/redberry-title.vue";

export default {
  components: {
    RedberryTitle,
  },
};
</script>
