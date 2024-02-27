<script setup>
import { ref } from "vue";

const value = ref([2000, 50000]);
</script>

<template>
  <v-card>
    <v-card-text>
      <v-range-slider
        :thumb-size="30"
        thumb-color="#fff"
        v-model="value"
        tile="true"
        strict
      ></v-range-slider>
    </v-card-text>

    from {{ Math.ceil(value[0]) }} to {{ Math.ceil(value[1]) }}
  </v-card>
</template>
