<script setup>
import
</script>
<template>
  <div
    class="flex bg-contact-image text-white bg-cover bg-center justify-center items-center h-[60vh] w-full"
  >
    <h3 class="text-5xl font-bold">Contact Us</h3>
  </div>
  <div class="flex gap-5 px-12 my-5">
    <form class="flex flex-col w-full p-5 md:w-1/2 gap-4" action="">
      <h3 class="text-3xl font-medium">Get In Touch With Us</h3>
      <p class="text-lg font-medium">
        Send us a message or inquiries, our support team will be in touch with
        you
      </p>
      <div class="flex w-full gap-5">
        <input
          class="p-3 rounded-md w-1/2 flex border-slate-500 border"
          placeholder="Name*"
          type="text"
        />
        <input
          class="p-3 rounded-md w-1/2 flex border-slate-500 border"
          placeholder="E-mail*"
          type="text"
        />
      </div>
      <textarea
        class="p-3 rounded-md flex border-slate-500 border"
        placeholder="Your message*"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button class="bg-red-primary font-medium text-white py-3 rounded">
        Submit
      </button>
    </form>
    <div>
      <div class="extra-details h-full justify-center p-4 flex flex-col">
        <span>
          <h3>Address</h3>
          <p>90 Nwaniba Road Uyo Akwa ibom</p>
        </span>
        <span>
          <h3>Phone</h3>
          <p>+2349092634756, +2347050921323</p>
        </span>
        <span>
          <h3>Email</h3>
          <p>info@klausmall.com</p>
        </span>
        <span>
          <h3>Working Hours</h3>
          <p>Open: 8:00AM – Close: 18:00PM</p>
        </span>
        <span>
          <h3>Social Contact</h3>
          <div>
            <span class="fa fa-facebook"></span>
            <span class="fa fa-instagram"></span>
            <span class="fa fa-twitter"></span>
          </div>
        </span>
      </div>
    </div>
  </div>

  <div id="map"></div>
</template>
<style scoped>
.extra-details h3 {
  @apply flex font-semibold text-lg;
}
.extra-details span,
.extra-details {
  @apply flex flex-col gap-2;
}
.extra-details span:last-child div {
  @apply flex gap-2 flex-row text-lg;
}
.extra-details span:last-child div span {
  @apply w-8 h-8 bg-black text-white flex justify-center items-center rounded-full;
}
</style>
