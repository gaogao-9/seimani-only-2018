<template>
  <div class="logo" :class="{ show: isShow }">
    <p>2018年秋<br>政剣マニフェスティア<br>
非公式 オンリーイベント<br>
東京近郊某所にて 開催決定！</p>
  </div>
</template>

<script>
export default {
  data () {
    return { isShow: false }
  },
  mounted () {
    this.isShow = true
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Makinas-Scrap-5";
  src: url("/assets/font/Makinas-Scrap-5.woff") format("truetype");
}

.logo{
  text-align: center;
  font-size : 7.5vw;
  font-family: "Makinas-Scrap-5";
  line-height: 1.25;
  opacity: 0;
}

.logo.show {
  transition: 1s opacity ease;
  opacity: 1;
}

@media screen and (orientation: landscape) {
  .logo {
    font-size: 2.5rem;
  }
}
</style>
