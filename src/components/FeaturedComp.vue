<script setup>
import hamper1 from "../assets/Hamper1.png";
import hamper2 from "../assets/hamper2.png";
import hamper3 from "../assets/hamper3.png";
import hamper4 from "../assets/hamper4.png";
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let ctx;
onMounted(() => {
  ctx = gsap.context(() => {
    let tl = gsap.timeline();

    gsap.from(".features", {
      scrollTrigger: {
        trigger: ".featuredhead",
        start: "top 80%",
      },
      x: 100,
      duration: 1,
      opacity: 0,
      ease: "power1.out",
      yoyo: true,
      stagger: 0.14,
    });
  });
});
onUnmounted(() => {
  ctx.revert;
});
const featured = [
  {
    name: "Tropical Fruit Mix Hamper",
    price: 10000,
    imgSrc: hamper1,
  },
  {
    name: "Christmas Choco Hamper",
    price: 30000,
    imgSrc: hamper2,
  },
  {
    name: "New year Hamper",
    price: 20000,
    imgSrc: hamper3,
  },
  {
    name: "Hamper of Hampers",
    price: 100000,
    imgSrc: hamper4,
  },
];
</script>

<template>
  <div
    class="w-full flex self-center justify-self-center flex-col gap-10 mb-5 items-center p-5"
  >
    <h4
      class="featuredhead text-3xl font-medium before:absolute relative before:h-1 w-auto before:rounded-sm before:bottom-0 before:w-[60%] before:bg-red-primary before:content-['']"
    >
      Featured
    </h4>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full flex-col md:flex-row flex-wrap md:px-5 justify-evenly md:justify-center items-center mx-6"
    >
      <div
        v-for="({ name, price, imgSrc }, index) in featured"
        :key="index"
        class="w-full features border-red-primary border-[1px] justify-evenly p-4 rounded-lg cursor-pointer flex flex-col gap-2"
      >
        <img :src="imgSrc" :alt="`hamper_${index}`" />
        <h3 class="font-medium text-ellipsis truncate md:text-xl">
          {{ name }}
        </h3>
        <div class="text flex md:flex-row flex-col justify-between">
          <p>0 Reviews</p>
          <p class="first-letter:dpub">N{{ price }}</p>
        </div>
        <button class="bg-red-primary text-white py-3 rounded-lg" v-ripple>
          Add To Cart
        </button>
      </div>
    </div>
  </div>
  <div class="see">me</div>
</template>
