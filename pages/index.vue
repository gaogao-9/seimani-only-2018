<template>
	<frame-template :title="title">
		<div class="mainContainer" slot="main">
			<div class="bgContainer">
				<img class="bg" :src="bg">
			</div>
			<logo></logo>
			<div class="chara syerobu"></div>
			<div class="chara hirari"></div>
		</div>
	</frame-template>
</template>

<script>
import FrameTemplate from "~/components/FrameTemplate.vue";
import Logo from "~/components/Logo.vue";

export default {
	data: () => ({
		bg: require("~/assets/img/teaser_bg.jpg"),
	}),
	components: {
		FrameTemplate,
		Logo,
	},
};
</script>

<style scoped>
.mainContainer {
	position: relative;
	width: 100%;
	height: 100%;
	
	& .logo {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 100%;
	}
	
	& .chara {
		position: absolute;
		width: 200px;
		background-size: contain;
		background-repeat: no-repeat;
		
		&.syerobu {
			top: 0px;
			left: -50px;
			height: 246px;
			animation: up-down-syerobu 2s ease-in-out 0s infinite alternate;
			background-image: url("/assets/img/chara/syerobu.png");
		}
		
		&.hirari {
			bottom: 0px;
			right: -50px;
			height: 255px;
			animation: up-down-hirari 2s ease-in-out 0s infinite alternate;
			background-image: url("/assets/img/chara/hirari.png");
		}
	}
	
	& .bgContainer {
		display: flex;
		align-items: flex-end;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		& .bg {
			position: relative;
			bottom: 0;
			width: 100%;
			transition: bottom 0.2s ease-out 0s;
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

@media screen and (min-width:1040px) {
	.mainContainer {
		& .bgContainer {
			& .bg {
				bottom: -150px;
			}
		}
	}
}

@media screen and (min-width:1240px) {
	.mainContainer {
		& .bgContainer {
			& .bg {
				bottom: -250px;
			}
		}
	}
}

@media screen and (max-height:440px) {
	.mainContainer {
		& .bgContainer {
			& .bg {
				bottom: -250px;
			}
		}
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

@media screen and (max-height:440px) {
	.mainContainer {
		& .bgContainer {
			& .bg {
				bottom: -270px;
			}
		}
	}
}

@keyframes up-down-syerobu {
	100% {
		top: 25px;
	}
	0% {
		top: -25px;
	}
}

@keyframes up-down-hirari {
	100% {
		bottom: 25px;
	}
	0% {
		bottom: -25px;
	}
}

</style>
