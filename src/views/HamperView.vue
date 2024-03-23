<script setup>
import { ref } from "vue";
import HeroSearch from "../components/HeroSearch.vue";
import { getProduct } from "../lib/getProducts";
const length = ref(getProduct.length);
console.log(getProduct);
</script>
<template>
  <hero-search />
</template>
