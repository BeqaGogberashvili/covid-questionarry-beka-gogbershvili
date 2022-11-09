<template>
  <div class="min-h-screen flex justify-center items-center">
    <h1 class="text-white font-tbc text-[64px] tracking-[24px]">მადლობა</h1>
  </div>
  <p>{{ savedData }}</p>
</template>

<style scoped>
* {
  background: #232323;
}
</style>

<script>
import { keepData } from "@/stores/store.js";
import axios from "axios";

export default {
  computed: {
    savedData() {
      return keepData().getData;
    },
  },
  mounted() {
    const data = this.savedData;
    axios.post("https://covid19.devtest.ge/api/create", data);
  },
};
</script>
