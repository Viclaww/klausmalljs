<script setup>
import HeroSearchVue from "./HeroSearch.vue";
</script>
<template>
  <!-- <SwipeComp /> -->
  <div
    class="w-full flex gap-4 flex-col-reverse md:px-10 justify-around mt-10 h-[90%] md:flex-row items-center"
  >
    <div class="text-center md:text-left flex flex-col w-[70%] md:w-auto">
      <h3 class="text-4xl text-red-500 md:text-6xl mb-5 md:text-left font-bold">
        Don't be <br />
        on Santa's
        <br />
        Naughty List
      </h3>
      <p class="text-xl font-medium md:text-left">
        Share the season of love by giving<br />
        to family and loved ones
      </p>
    </div>
    <img class="w-[80%] md:w-[29%]" src="../assets/pngegg(873) 1.png" alt="" />
    <HeroSearchVue />
  </div>
</template>
