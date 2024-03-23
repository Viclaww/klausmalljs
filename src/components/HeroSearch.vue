<script setup>
import FilterComp from "./FilterComp.vue";
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
let ctx;
onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline();
    tl.from(".input-search", {
      y: 40,
      duration: 1,
      opacity: 0,
      ease: "power1.out",
      stagger: 0.1,
    });
  });
});
onUnmounted(() => {
  ctx.revert;
});
</script>
<template>
  <div class="w-[25%] gap-2 hidden md:flex flex-col relative">
    <div class="input-search">
      <input
        class="border-solid border-2 border-black pl-3 h-11 w-full rounded-lg"
        type="text"
      />
      <button
        class="bg-black rounded-lg absolute top-1 right-2 h-9 w-9 flex justify-center items-center"
      >
        <img class="w-5" src="../assets/Search.svg" alt="" />
      </button>
    </div>

    <FilterComp />
  </div>
</template>
