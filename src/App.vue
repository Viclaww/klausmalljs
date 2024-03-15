<script setup>
import { onMounted, onUnmounted } from "vue";
import HeaderTop from "./components/HeaderTop.vue";
import FooterComp from "./components/FooterComp.vue";
import gsap from "gsap";
let ctx;

onMounted(() => {
  const follow = document.querySelector(".follower");
  const cur = document.querySelector(".cursor");
  const links = document.querySelectorAll("p");
  const img = document.querySelectorAll("img");
  const headers = document.querySelectorAll("h3");
  const inputs = document.querySelectorAll("input[type=text]");
  ctx = gsap.context(() => {
    gsap.set(follow, { xPercent: -50, yPercent: -50 });
    gsap.set(cur, { xPercent: -50, yPercent: -50 });

    links.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterLinks);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    headers.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterHeaders);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    img.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterHeaders);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    inputs.forEach((input) => {
      input.addEventListener("mouseenter", handleMouseEnterInput);
      input.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
  });

  const handleMouseEnterInput = () => {
    gsap.to(".follower", 0.5, {
      opacity: 0,
    });
    gsap.to(".cursor", 0.1, {
      opacity: 0,
    });
  };

  function handleMouseEnterHeaders(e) {
    cur.classList.add("growb");
    gsap.to(".follower", 0.5, {
      opacity: 0,
    });
    gsap.to(".cursor", 0.2, {
      css: {
        scale: 10,
        zIndex: 100,
        left: e.clientX,
        top: e.clientY,
      },
    });
  }
  function handleMouseEnterLinks(e) {
    cur.classList.add("grow");
    gsap.to(".follower", 0.5, {
      opacity: 0,
    });
    gsap.to(".cursor", 0.1, {
      css: {
        scale: 5,
        left: e.clientX,
        top: e.clientY,
      },
    });
  }
  function handleMouseLeave(e) {
    cur.classList.remove("grow");
    cur.classList.remove("growb");
    gsap.to(".follower", 0.5, {
      opacity: 0.45,
      // css: {

      //   left: e.clientX,
      //   top: e.clientY,
      // },
      // ease: "power1.out",
    });
    gsap.to(".cursor", 0.1, {
      css: {
        left: e.clientX,
        top: e.clientY,
        scale: 1,
        opacity: 1,
      },
    });
  }

  function handleMouseMove(e) {
    gsap.to(".follower", 0.5, {
      css: {
        left: e.clientX,
        top: e.clientY,
      },
    });
    gsap.to(".cursor", 0.1, {
      css: {
        left: e.clientX,
        top: e.clientY,
      },
    });
  }
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <span
    class="cursor fixed w-2 h-2 z-[500] hidden origin-center lg:block select-none rounded-full bg-emerald-200 pointer-events-none"
  >
  </span>
  <span
    class="follower fixed w-10 h-10 z-[200] select-none hidden origin-center lg:block rounded-full opacity-45 bg-red-primary pointer-events-none"
  ></span>
  <HeaderTop />
  <RouterView />
  <FooterComp />
</template>

<style>
body {
  cursor: none;
  /* background-color: black; */
}
.grow {
  background-color: white;
  mix-blend-mode: difference;
}
.growb {
  background-color: yellow;
  mix-blend-mode: exclusion;
}
</style>
