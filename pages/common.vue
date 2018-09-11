<template>
	<frame-template>
		<card title="会場案内図">
		  <img src="/assets/img/map.png">
		</card>
		<card title="日程表">
		  <img src="/assets/img/schedule.png">
		</card>
		<card title="サークル一覧">
		  <img src="/assets/img/circlelist.png">
		</card>
	</frame-template>
</template>

<script>
import FrameTemplate from "~/components/FrameTemplate.vue";
import Card from "~/components/Card.vue";

export default {
	head() {
		return {
			title: this.title,
		};
	},
	data: () => ({
		title: "参加者全般",
	}),
	methods: {
	},
	components: {
		FrameTemplate,
		Card,
	},
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
