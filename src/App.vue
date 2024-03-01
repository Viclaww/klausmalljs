<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderTop from "./components/HeaderTop.vue";
import FooterComp from "./components/FooterComp.vue";
</script>

<template>
  <HeaderTop />
  <RouterView />
  <FooterComp />
</template>
