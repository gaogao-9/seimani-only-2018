<template>
  <section class="container">
    <div class="logoContainer">
      <logo class="logo" />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url("/assets/img/teaser_bg.jpg");
  background-position: center center;
  background-size: cover;
}

.logoContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.logo {
  margin-bottom: 3rem;
}

@media screen and (orientation: landscape) {
  .container {
    background-size: contain;
  }
}
</style>
