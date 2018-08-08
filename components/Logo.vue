<template>
	<div class="logo" :class="{ show: isShow }">
	<p>
	</p>
	</div>
</template>

<script>
export default {
	data() {
		return { isShow: false };
	},
	mounted() {
		this.isShow = true;
	},
};
</script>

<style scoped>
@font-face {
  font-family: "Makinas-Scrap-5";
  src: url("/assets/font/Makinas-Scrap-5.woff") format("truetype");
}

.logo{
  color: white;
  text-align: center;
  font-size : 4.94vw;
  font-family: "Makinas-Scrap-5";
  line-height: 1.25;
  opacity: 0;
}

.logo.show {
  transition: 1s opacity ease;
  opacity: 1;
}
</style>
