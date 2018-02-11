<template>
	<div class="header">
		<h1><a href="/">政剣マニフェスティアオンリーイベント2018</a></h1>
		<p class="menuOpenButton" @click="openMenu"><i class="fas fa-bars fa-2x"></i></p>
	</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	props: {
		isAsideOpened: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		...mapMutations({
			openMenu: "aside/openMenu",
		}),
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	
	& a {
		color: white;
		text-decoration: none;
		vertical-align: middle;
	}
	
	& .menuOpenButton {
		color: white;
		cursor: pointer;
	}
}

@media screen and (min-width:840px) {
	.header {
		& .menuOpenButton {
			display: none;
		}
	}
}
</style>
