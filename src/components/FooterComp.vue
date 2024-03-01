<template>
  <div
    class="flex flex-col md:flex-row flex-wrap gap-4 w-full p-10 justify-evenly footer"
  >
    <div class="md:w-1/5 w-full">
      <img class="w-2/3" src="../assets/KlausMall.svg" alt="" />
      <p>
        A registered online platform for Sales & distribution of Hampers and
        Gifts.
      </p>
    </div>
    <div>
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
    </div>
    <div>
      <h3>Shop</h3>
      <p>Regular Hampers</p>
      <p>Luxury Hampers</p>
      <p>Christmas Hampers</p>
      <p>Essenstial Hampers</p>
      <p>Valentine Hampers</p>
    </div>
    <div>
      <h3>Company</h3>
      <p>About</p>
      <p>Account</p>
      <p>Cart</p>
      <p>Checkout</p>
    </div>
    <div>
      <h3>Social Contact</h3>
      <div>
        <span class="fa fa-facebook"></span>
        <span class="fa fa-instagram"></span>
        <span class="fa fa-twitter"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  @apply flex font-semibold;
}
.footer div {
  @apply flex flex-col gap-2;
}
.footer div:last-child div {
  @apply flex flex-row text-lg;
}
.footer div:last-child div span {
  @apply w-8 h-8 bg-black text-white flex justify-center items-center rounded-full;
}
</style>
