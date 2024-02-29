<script setup>
import { ref } from "vue";

const value = ref([20000, 50000]);
</script>

<template>
  <v-range-slider
    :thumb-size="30"
    thumb-color="#aaa"
    :min="2000"
    :max="100000"
    v-model="value"
    tile="true"
    strict
  ></v-range-slider>

  N{{ Math.ceil(value[0]) }} - N{{ Math.ceil(value[1]) }}
</template>
