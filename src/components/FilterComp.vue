<script setup>
import { ref } from "vue";
import PriceFilter from "./PriceFilter.vue";
</script>
<template>
  <div class="lg:flex flex-col gap-2">
    <h2 class="text-3xl hidden md:block input-search font-medium">
      Categories
    </h2>
    <div class="flex flex-col text-xl gap-2">
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Regular-Hamper">Regular Hamper</label>
      </span>
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Christmas-Hamper">Christmas Hamper</label>
      </span>
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Easter-Hamper">Easter Hamper</label>
      </span>
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Luxury-Hamper">Luxury Hamper</label>
      </span>
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Birthday-Hamper">Birthday Hamper</label>
      </span>
      <span class="flex input-search gap-2">
        <input class="accent-red-primary w-5" type="checkbox" />
        <label for="Cards">Cards</label>
      </span>
    </div>
  </div>
  <div
    class="price-filter input-search p-4 border-slate-800 rounded-md border gap-2 flex flex-col"
  >
    <h2 class="text-2xl text-center">Filter By Price</h2>
    <PriceFilter />
    <button
      class="bg-red-primary my-2 text-white text-lg font-medium py-3 rounded-lg"
    >
      Filter
    </button>
  </div>
</template>
