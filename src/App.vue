<script setup>
import { onMounted, onUnmounted } from "vue";
import HeaderTop from "./components/HeaderTop.vue";
import FooterComp from "./components/FooterComp.vue";
import gsap from "gsap";
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const follow = document.querySelector(".follower");
    const cur = document.querySelector(".cursor");
    gsap.set(follow, { xPercent: -50, yPercent: -50 });
    gsap.set(cur, { xPercent: -50, yPercent: -50 });

    const links = document.querySelectorAll("a, button");
    const inputs = document.querySelectorAll("input");
    links.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    inputs.forEach((input) => {
      input.addEventListener("mouseenter");
    });

    window.addEventListener("mousemove", handleMouseMove);
  });
});

const handleMouseEnterInput = () => {
  gsap.to(".follower", 0.6, {
    opacity: 0,
  });
  gsap.to(".cursor", 0.6, {
    opacity: 0,
  });
};
onUnmounted(() => {
  ctx.revert();
});

function handleMouseEnter(e) {
  gsap.to(".follower", 0.6, {
    opacity: 0,
  });
  gsap.to(".cursor", 0.1, {
    x: e.clientX,
    y: e.clientY,
    duration: 3,
    scale: 10,
    opacity: 0.5,
  });
}
function handleMouseLeave(e) {
  gsap.to(".follower", 0.6, {
    opacity: 0.45,
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to(".cursor", 0.1, {
    x: e.clientX,
    y: e.clientY,
    scale: 1,
    duration: 1,
    opacity: 1,
  });
}

function handleMouseMove(e) {
  gsap.to(".follower", 0.6, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to(".cursor", 0.1, {
    x: e.clientX,
    y: e.clientY,
  });
}
</script>

<template>
  <span
    class="cursor fixed w-2 h-2 z-[500] select-none rounded-full bg-emerald-200 pointer-events-none"
  >
  </span>
  <span
    class="follower fixed w-10 h-10 z-[200] select-none rounded-full opacity-45 bg-red-primary pointer-events-none"
  ></span>
  <HeaderTop />
  <RouterView />
  <FooterComp />
</template>

<style>
body {
  cursor: none;
}
</style>
