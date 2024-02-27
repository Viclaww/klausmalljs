<script setup>
import { ref } from "vue";
import PriceFilter from "./PriceFilter.vue";
const sliderMin = ref(50);
const sliderMax = ref(80);
</script>
<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl font-medium my-3">Categories</h2>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Regular-Hamper">Regular Hamper</label>
    </span>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Christmas-Hamper">Christmas Hamper</label>
    </span>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Easter-Hamper">Easter Hamper</label>
    </span>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Luxury-Hamper">Luxury Hamper</label>
    </span>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Birthday-Hamper">Birthday Hamper</label>
    </span>
    <span class="flex gap-2">
      <input type="checkbox" />
      <label for="Cards">Cards</label>
    </span>
  </div>
  <div class="price-filter">
    <h2>Filter by price-filter</h2>
    <PriceFilter />
  </div>
</template>
