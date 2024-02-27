<script setup>
import FilterComp from "./FilterComp.vue";
</script>
<template>
  <div class="w-[25%] relative">
    <input
      class="border-2 pl-3 border-black h-11 w-full rounded-xl"
      type="text"
    />
    <button
      class="bg-black rounded-lg absolute top-1 right-2 h-9 w-9 flex justify-center items-center"
    >
      <img class="w-5" src="../assets/Search.svg" alt="" />
    </button>
    <FilterComp />
  </div>
</template>
