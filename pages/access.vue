<template>
	<frame-template>
		<card :title="title">
			<div class="mapContainer">
				<iframe class="map" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJq3FUxZhgGGAR-_WCfU-yC6Q&destination=日本神奈川県川崎市幸区堀川町６６−２０+経済労働局川崎市産業振興会館&mode=walking&key=AIzaSyAAaCUU3jjAQggZTpe8AE_6DQxQ6TP8cLA" allowfullscreen></iframe>
				<div class="text">
					<p><i class="far fa-compass"></i>&nbsp;会場: 川崎市産業振興会館</p>
					<p><i class="far fa-clock"></i>&nbsp;日程: 2018/09/24(月/祝)</p>
					<br>
					<p><i class="fas fa-train"></i>&nbsp;JR川崎駅から徒歩8分</p>
					<p><i class="fas fa-train"></i>&nbsp;京急川崎駅から徒歩7分</p>
					<p>公式サイトによる案内は<a target="_blank" href="http://www.kawasaki-net.ne.jp/kaikan/access.html">こちら</a></p>
				</div>
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
		title: "アクセス",
	}),
	components: {
		FrameTemplate,
		Card,
	},
};
</script>

<style scoped>
.mapContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	& .map {
		width: 260px;
		height: 260px;
	}
	
	& .text {
		margin-top: 20px;
	}
}

@media screen and (min-width:480px) {
	.mapContainer {
		& .map {
			width: 420px;
			height: 420px;
		}
	}
}

@media screen and (min-width:640px) {
	.mapContainer {
		flex-direction: row;
		
		& .map {
			width: 300px;
			height: 500px;
		}
		
		& .text {
			margin-top: 0px;
			margin-left: 30px;
		}
	}
}

@media screen and (min-width:1040px) {
	.mapContainer {
		& .map {
			width: 500px;
			height: 500px;
		}
	}
}

@media screen and (min-width:1240px) {
	.mapContainer {
		& .map {
			width: 700px;
			height: 500px;
		}
	}
}
</style>
