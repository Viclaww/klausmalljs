<script setup>
import FilterComp from "./FilterComp.vue";
</script>
<template>
  <div class="w-[25%] gap-2 hidden md:flex flex-col relative">
    <input
      class="border-solid border-2 border-black pl-3 h-11 w-full rounded-lg"
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
