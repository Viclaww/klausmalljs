<template>
  <div class="flex flex-col w-full items-center p-10 gap-5">
    <h3 class="text-3xl font-medium">Customer Reviews</h3>
    <div class="w-full md:flex overflow-hidden">
      <div
        ref="innerRef"
        class="flex justify-around md:w-full md:justify-center w-[250vw] gap-8"
      >
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="p-5 shadow-lg rounded-lg flex flex-col gap-1 w-[27%]"
        >
          <h3 class="text-lg text-red-primary font-semibold">
            {{ getRatingType(review.rating) }}
          </h3>
          <div>
            <span
              v-for="n in 5"
              :key="n"
              class="fa"
              :class="{
                'fa-star': n <= review.rating,
                checked: n <= review.rating,
              }"
            ></span>
          </div>
          <p class="font-medium my-2 text-lg">{{ review.message }}</p>
          <div
            class="flex flex-col before:w-full before:h-1 before:bg-red-primary w-2/5 font-medium before:rounded before:absolute before:-bottom-1 before:flex relative text-right self-end"
          >
            <h6>{{ review.name }}</h6>
            <p>{{ review.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const innerRef = ref(null);

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
    location: "Lagos",
  },
  {
    name: "Bella",
    rating: 5,
    message: "“Delivery on point, package in good shape”",
    location: "Accra",
  },
];

const getRatingType = (rating) => {
  return rating == 5
    ? "Highly Recommended!"
    : rating == 4
      ? "Good service!"
      : rating == 3
        ? "Great!"
        : "Unknown Rating"; // Default case
};

let intervalId;

onMounted(() => {
  if (window.innerWidth <= 768) {
    const containerWidth = innerRef.value.clientWidth;
    const totalCards = reviews.length;
    const cardWidth = containerWidth / totalCards;
    let currentIndex = 0;

    intervalId = setInterval(() => {
      currentIndex++;
      if (currentIndex >= totalCards) {
        innerRef.value.style.transition = `transform 0.5s ease-in-out`;
        innerRef.value.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        setTimeout(() => {
          currentIndex = 0; // Reset index to 0
          innerRef.value.style.transition = "none";
          innerRef.value.style.transform = `translateX(0)`;
        }, 500);
      } else {
        innerRef.value.style.transition = "transform 0.5s ease-in-out";
        innerRef.value.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    }, 2000);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.checked {
  color: yellow;
}
</style>
