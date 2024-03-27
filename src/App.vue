<script setup>
import HeaderTop from "./components/HeaderTop.vue";
import FooterComp from "./components/FooterComp.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <HeaderTop />
  <RouterView />
  <FooterComp />
</template>
