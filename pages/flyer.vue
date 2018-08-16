<template>
	<frame-template>
		<card :title="title">
			<div class="flyerContainer">
				<a :href="flyerUrl" alt="フライヤー" target="_blank"><img class="flyer" :src="flyerUrl"></a>
			</div>
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
		title: "フライヤー",
		flyerUrl: require("~/assets/img/flyer.jpg"),
	}),
	components: {
		FrameTemplate,
		Card,
	},
};
</script>

<style scoped>
.flyerContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	& .flyer {
		width: 100%;
		height: 100%;
	}
	
	& .text {
		margin-top: 20px;
	}
}
</style>
