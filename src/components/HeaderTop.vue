<script setup>
import { ref } from "vue";
import { RouterLink as Link } from "vue-router";

const isOpen = ref(false);
console.log(isOpen.value);
const navLinks = [
  { name: "Hamper Collection", path: "/hamper-collections" },
  { name: "Grocery Shopping", path: "/groceries" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "About Us", path: "/about" },
];
</script>

<template>
  <div
    class="flex mt-5 items-center px-4 w-full md:px-10 justify-between md:justify-evenly"
  >
    <div class="flex items-center">
      <img
        v-if="!isOpen"
        @click="isOpen = !isOpen"
        class="w-8 h-8 mt-5 mr-3 duration-150 transition md:hidden"
        src="../assets/menu-svgrepo-com.svg"
        alt=""
      />
      <Link to="">
        <img
          class="h-10 relative z-30 md:z-0 cursor-pointer"
          src="../assets/KlausMall.svg"
        />
      </Link>
    </div>

    <span
      v-if="isOpen"
      @click="isOpen = !isOpen"
      class="text-xl absolute z-40 cursor-pointer font-extrabold right-5 top-10S"
    >
      <img src="../assets/cancel.png" alt="" />
    </span>
    <!-- md:flex w-[50%] hidden justify-between -->
    <div
      :class="[
        isOpen
          ? 'w-full border-ash-shade border-r h-[100vh] pt-[25%]'
          : ' md:w-[50%] -translate-x-full md:translate-x-0 pointer-events-none md:pointer-events-auto',
        'absolute left-0 top-0 flex  flex-col md:border-0 transition-all duration-500 ease-in-out z-10  h-full md:h-auto md:flex-row md:justify-between md:relative md:pt-0 bg-white',
      ]"
    >
      <Link
        v-for="link in navLinks"
        :class="[
          isOpen
            ? 'translate-y-0 font-semibold opacity-100 pl-5 py-6 border-b border-ash-shade/40'
            : 'translate-y-3 md:translate-y-0 w-full md:w-auto text-nowrap opacity-0 md:opacity-100',
          'font-medium transition-all duration-100 cursor-none hover:text-red-primary md:py-7  text-lg md:border-0 md:text-lg ',
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

<style scoped></style>
