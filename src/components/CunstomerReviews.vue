<script setup>
import { computed } from "vue";

const reviews = [
  {
    name: "Ace",
    rating: 5,
    message: "“Very reliable service, Very hospitable team”",
    location: "Port Harcourt",
  },
  {
    name: "Mr John",
    rating: 4,
    message: "“Speed delivery and customer service are superb, cheers”",
    location: "lagos",
  },
  {
    name: "Bella",
    rating: 5,
    message: "“Delivery on point, package in good shape”",
    location: "Accra",
  },
];
const ratingType = computed((x) => {
  return x == 5
    ? "Highly Recommended!"
    : x == 4
      ? "Good service!"
      : x == 3
        ? "Great!"
        : "Unknown Rating"; // Default case
});
</script>
<template>
  <div
    v-for="({ name, rating, message, location }, index) in reviews"
    :key="index"
  >
    <h3>{{ ratingType(rating) }}</h3>
    <div>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
    </div>
    <p>{{ message }}</p>
    <div>
      <h6>{{ name }}</h6>
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<style>
.checked {
  color: yellow;
}
</style>
