<script setup>
import HeroSearchVue from "./HeroSearch.vue";
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
let ctx;
onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline();

    tl.from(".hero-head", {
      x: 30,
      duration: 0.5,
      ease: "power1.out",
    })
      .from(".hero-p", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      })
      .from(".img-hero", {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
  });
});
onUnmounted(() => {
  ctx.revert;
});
</script>
<template>
  <!-- <SwipeComp /> -->
  <div
    class="w-full flex gap-4 flex-col-reverse md:px-10 justify-around mt-10 h-[90%] md:flex-row items-center"
  >
    <div class="text-center md:text-left flex flex-col w-[70%] md:w-auto">
      <h3
        class="text-4xl hero-head text-red-500 md:text-6xl mb-5 md:text-left font-bold"
      >
        Don't be <br />
        on Santa's
        <br />
        Naughty List
      </h3>
      <p class="text-xl hero-p font-medium md:text-left">
        Share the season of love by giving<br />
        to family and loved ones
      </p>
    </div>
    <img
      class="w-[80%] img-hero md:w-[29%]"
      src="../assets/pngegg(873) 1.png"
      alt=""
    />
    <HeroSearchVue />
  </div>
</template>
