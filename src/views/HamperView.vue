<script setup>
import { ref } from "vue";
import { products } from "../lib/productsData";
const loading = ref(true);
const data = ref(null);
setTimeout(() => {
  data.value = products;
  loading.value = false;
}, 5000);
import HeroSearch from "../components/HeroSearch.vue";
import FilterModal from "../components/FilterModal.vue";
</script>
<template>
  <div class="flex gap-10 w-full px-3 md:px-14">
    <hero-search />
    <filter-modal />
    <div class="w-full bg-amber-400 p-2 md:5">
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-4 flex-wrap justify-stretch"
        >
          <div
            v-for="({ name, price, imgSrc }, index) in data"
            :key="index"
            class="w-full featured border-red-primary border-[1px] justify-evenly p-4 rounded-lg cursor-pointer flex flex-col gap-2"
          >
            <img :src="imgSrc" :alt="`hamper_${index}`" />
            <h3 class="font-medium text-xl">{{ name }}</h3>
            <div class="text flex justify-between">
              <p>0 Reviews</p>
              <p class="first-letter:dpub">N{{ price }}</p>
            </div>
            <button class="bg-red-primary text-white py-3 rounded-lg" v-ripple>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
