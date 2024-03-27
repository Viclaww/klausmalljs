<script setup>
import { nextTick, ref } from "vue";
import { RouterLink as Link } from "vue-router";
import gsap from "gsap";

const isOpen = ref(false);

const navLinks = [
  { name: "Hamper Collection", path: "/hamper-collections" },
  { name: "Grocery Shopping", path: "/groceries" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "About Us", path: "/about" },
];

// let ctx;
// onMounted(() => {
//   ctx = gsap.context(() => {
//     let tl = gsap.timeline();
//     tl.from(".header", {
//       y: -50,
//       duration: 0.5,
//       ease: "power1.out",
//     }).from(".header-img", {
//       x: -50,
//       opacity: 0,
//       duration: 0.5,
//       ease: "power1.out",
//     });
//   });
// });
// onUnmounted(() => {
//   ctx.revert;
// });
</script>

<template>
  <div
    class="flex header mt-5 items-center px-4 w-full md:px-10 justify-between md:justify-evenly"
  >
    <div class="flex items-center">
      <img
        v-if="!isOpen"
        @click="
          isOpen = !isOpen;
          console.log(isOpen);
        "
        class="w-8 h-8 mt-5 mr-3 duration-150 relative z-[100] transition md:hidden"
        src="../assets/menu-svgrepo-com.svg"
        alt=""
      />
      <Link to="/">
        <img
          class="h-10 header-img relative z-30 cursor-pointer"
          src="../assets/KlausMall.svg"
        />
      </Link>
    </div>

    <span
      v-if="isOpen"
      @click="toggleNav"
      class="text-xl absolute z-50 cursor-pointer font-extrabold right-5 top-10"
    >
      <img
        @click="
          isOpen = !isOpen;
          console.log(isOpen);
        "
        src="../assets/cancel.png"
        alt=""
      />
    </span>
    <!-- md:flex w-[50%] hidden justify-between -->
    <div
      :class="[
        isOpen
          ? 'w-full border-ash-shade border-r h-[100vh] pt-[25%]'
          : ' md:w-[50%] -translate-x-full md:translate-x-0 pointer-events-none md:pointer-events-auto',
        'absolute left-0 top-0 flex z-10 flex-col md:border-0 transition-all duration-500 ease-in-out  h-full  md:h-auto md:flex-row md:justify-between md:relative md:pt-0 bg-white',
      ]"
    >
      <Link
        v-for="link in navLinks"
        :class="[
          isOpen
            ? 'translate-y-0 font-semibold opacity-100 pl-5 py-6 border-b border-ash-shade/40'
            : 'translate-y-3 md:translate-y-0 w-full md:w-auto text-nowrap opacity-0 md:opacity-100',
          'font-medium transition-all bg-white z-20  duration-100 hover:text-red-primary md:py-7  text-lg md:border-0 md:text-lg ',
        ]"
        class=""
        :key="link.name"
        :to="link.path"
        ><p>{{ link.name }}</p></Link
      >
    </div>
    <div class="flex items-center justify-around w-[30%] md:w-[10%]">
      <div
        class="w-10 box-border cursor-pointer h-10 p-2 bg-white shadow-black rounded-sm shadow-sm"
      >
        <img src="../assets/Profile_Icon_UIA.png" alt="person" />
      </div>

      <img
        class="w-12 h-12 cursor-pointer"
        src="../assets/Cart.png"
        alt="person"
      />
    </div>
  </div>
</template>
