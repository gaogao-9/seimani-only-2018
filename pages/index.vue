<template>
	<frame-template>
		<div class="mainContainer" :style="`background-image:url(${bg})`">
			<div class="chara syerobu" :class="{show: isShow}"></div>
			<div class="chara hirari" :class="{show: isShow}"></div>
		</div>
	</frame-template>
</template>

<script>
import FrameTemplate from "~/components/FrameTemplate.vue";

export default {
	data: () => ({
		bg: require("~/assets/img/teaser_bg.jpg"),
		isShow: false,
	}),
	mounted() {
		this.isShow = true;
	},
	components: {
		FrameTemplate,
	},
};
</script>

<style scoped>
.mainContainer {
	position: relative;
	width: 100% !important;
	height: calc(100vh - 70px - 60px);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center 30%;
	
	& .chara {
		position: absolute;
		width: 200px;
		background-size: contain;
		background-repeat: no-repeat;
		display: none;
		
		&.show {
			display: block;
		}
		
		&.syerobu {
			top: 25px;
			left: -30px;
			height: 246px;
			animation: up-down-syerobu 2s ease-in-out 0s infinite alternate;
			background-image: url("/assets/img/chara/syerobu.png");
		}
		
		&.hirari {
			bottom: 25px;
			right: -30px;
			height: 255px;
			animation: up-down-hirari 2s ease-in-out 0s infinite alternate;
			background-image: url("/assets/img/chara/hirari.png");
		}
	}
}

@media screen and (max-width: 440px) {
	.mainContainer {
		& .chara {
			width: 150px;
			
			&.hirari {
				height: 191.25px;
			}
			
			&.syerobu {
				height: 184.5px;
			}
		}
	}
}

@media screen and (max-height:440px) {
	.mainContainer {
		& .chara {
			width: 100px;
			
			&.hirari {
				right: -25px;
				height: 127.5px;
			}
			
			&.syerobu {
				left: -25px;
				height: 123px;
			}
		}
	}
}

@keyframes up-down-syerobu {
	100% {
		top: 5px;
	}
	0% {
		top: 55px;
	}
}

@keyframes up-down-hirari {
	100% {
		bottom: 5px;
	}
	0% {
		bottom: 55px;
	}
}

</style>
