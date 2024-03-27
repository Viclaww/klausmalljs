<script setup>
import FilterComp from "./FilterComp.vue";
const props = defineProps(["ismodalOpen"]);
</script>
<template>
  <div
    class="w-[100%] bg-white h-[95%] translate-y-full flex flex-col gap-5 rounded-t-xl p-4 border left-0 top-[5%] shadow-sm z-50 absolute"
  >
    <h3 class="text-3xl font-medium">Filter</h3>

    <FilterComp />
  </div>
</template>
