<script setup>
import FilterComp from "./FilterComp.vue";
const props = defineProps(["ismodalOpen"]);
</script>
<template>
  <div
    :class="[
      ismodalOpen
        ? 'translate-y-0  z-[100] pointer-events-auto'
        : 'translate-y-full pointer-events-none opacity-0 scroll-m-0',
      'w-[100%] bg-white absolute duration-500 h-fit md:hidden  flex flex-col gap-5 rounded-t-xl p-4 border left-0 bottom-0 shadow-sm z-50',
    ]"
  >
    <h3 class="text-3xl font-medium">Filter</h3>
    <span @click="ismodalOpen = false" class="absolute right-6 text-xl">X</span>
    <FilterComp />
  </div>
</template>
