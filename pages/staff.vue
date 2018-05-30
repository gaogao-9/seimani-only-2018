<template>
	<frame-template>
		<card :title="title">
			<div class="staffContainer">
				<div class="iconContainer">
					<template v-for="({index, src}, id) in icons">
						<a class="iconButton" :class="{[`item-${index}`]: true, star0: (index>=0 && starSteps>0), star1: (index>=1 && starSteps>1), star2: (index>=2 && starSteps>2), star3: (index>=3 && starSteps>3), star4: (index>=4 && starSteps>4), dist: isShow, enabled: detailEnabled}">
							<img class="iconImage" :src="src" @click="iconClick(id)">
						</a>
					</template>
				</div>
				<div class="detailContainer">
					<template v-for="({name, description}, id) in details">
						<transition name="fadedetail">
							<table v-show="selectedId === id" class="detail" :class="{[`detail-${id}`]: true}">
								<tbody>
									<tr>
										<td rowspan="3" class="mediaCell">
											<div class="mediaIconContainer"><img class="icon" :src="icons[id].src"></div>
											<div class="socialMediaList"><a class="twitter" target="_blank" :href="`https://twitter.com/${id}`"><i class="fab fa-twitter fa-2x"></i></a></div>
										</td>
										<td>名前: {{name}}</td>
									</tr>
									<tr>
										<td><hr class="separator"></td>
									</tr>
									<tr>
										<td class="contentCell">{{description}}</td>
									</tr>
								</tbody>
							</table>
						</transition>
					</template>
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
		title: "運営メンバー紹介",
		isShow: false,
		selectedId: null,
		detailEnabled: false,
		starSteps: 0,
		icons: [
			"sanetaso",
			"non_affleck",
			"mimeino",
			"gaogao_9",
			"nyan_nyee",
		].reduce((obj, id, i) => {
			obj[id] = {
				index: i,
				src: require(`~/assets/img/staff/${id}.jpg`),
			};
			return obj;
		}, {}),
		details: {
			sanetaso: {
				name: "伊丹",
				description: "企画などを担当",
			},
			non_affleck: {
				name: "のんアフ",
				description: "会場関係などを担当。",
			},
			mimeino: {
				name: "あけ",
				description: "各種イラストなどを担当。",
			},
			gaogao_9: {
				name: "がお",
				description: "Webサイト作成などを担当。",
			},
			nyan_nyee: {
				name: "にゃんにー",
				description: "広報関係などを担当。",
			},
		},
	}),
	methods: {
		iconClick(id) {
			if(!this.detailEnabled) return;
			if(this.selectedId === id) return;

			this.selectedId = id;
		},
		delay(ms) {
			return new Promise((resolve, reject) => setTimeout(resolve, ms));
		},
	},
	async mounted() {
		this.isShow = true;

		await this.delay(1500);

		this.detailEnabled = true;
	},
	components: {
		FrameTemplate,
		Card,
	},
};
</script>

<style scoped>
.fadedetail-enter-active {
  transition: opacity 0.2s linear 0s;
}

.fadedetail-enter {
  opacity: 0;
}

.fa-twitter {
	color: #1da1f2;
}

.staffContainer {
	position: relative;
	margin: 0 auto;
	
	& .detailContainer {
		position: relative;
		height: 150px;
		& .detail {
			position: absolute;
			width: 100%;
			height: 150px;
			background-color: #9cffad;
			padding: 5px;
			
			& .mediaCell {
				width: 105px;
				padding-right: 5px;
				
				& .mediaIconContainer {
					margi-bottom: 5px;
					& .icon {
						width: 100%;
						border: solid 1px #ccc;
						vertical-align: bottom;
					}
				}
			
				& .socialMediaList{
					display: flex;
					justify-content: center;
					& .twitter {
						text-decoration: none;
					}
				}
			}
			
			& .separator {
				margin: 0;
				border-color: #adc3bc;
			}
			
			& .contentCell {
				height: 100%;
				vertical-align: top;
			}
		}
	}
}

@media screen and (max-width:639px) {
	.staffContainer {
		width: 100%;
		
		& .iconContainer {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			
			& .iconButton {
				margin: 10px;
				width: 25%;
				opacity: 0;
				transition: opacity 1.0s linear 0s;
				
				& .iconImage {
					width: 100%;
					vertical-align: bottom;
					border: solid 1px #ccc;
					border-radius: 50%;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
					transition: box-shadow 0.3s ease-out 0s;
				}
		
				&.dist {
					opacity: 1;
					&.enabled .iconImage {
						cursor: pointer;
						box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
					}
				}
			}
		}
	}
}

@media screen and (min-width:640px) {
	.staffContainer {
		width: calc(640px - 40px - 2px - 20px);
		height: calc(640px - 40px - 2px - 20px);
		
		& .iconContainer {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			margin: 0 auto;
			transition:
				width 0.2s ease-out 0s,
				height 0.2s ease-out 0s;
			width: 100%;
			height: 100%;
			
			& .iconButton {
				position: relative;
				top: 0;
				left: 0;
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				opacity: 0;
				transition: opacity 0.3s linear 0s;
		
				& .iconImage {
					width: 100%;
					vertical-align: bottom;
					border: solid 1px #ccc;
					border-radius: 50%;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
				}
				
				&.dist {
					opacity: 1;
					&.enabled .iconImage {
						cursor: pointer;
						animation: floating 3s ease-in-out 0.300s infinite alternate;
					}
				}
				
				&.item-0 {
					z-index: 4;
					transform: translateX(200%);
					
					&.dist {
						animation: star0 0.125s ease-in-out 0.500s 1 normal forwards;
					}
				}
				
				&.item-1 {
					z-index: 3;
					transform: translateX(100%);
					
					&.dist {
						animation:
							star0 0.125s ease-in-out 0.500s 1 normal forwards,
							star1 0.125s ease-in-out 0.625s 1 normal forwards;
					}
				}
				
				&.item-2 {
					z-index: 2;
					transform: translateX(0%);
					
					&.dist {
						animation:
							star0 0.125s ease-in-out 0.500s 1 normal forwards,
							star1 0.125s ease-in-out 0.625s 1 normal forwards,
							star2 0.125s ease-in-out 0.750s 1 normal forwards;
					}
				}
				
				&.item-3 {
					z-index: 1;
					transform: translateX(-100%);
					
					&.dist {
						animation:
							star0 0.125s ease-in-out 0.500s 1 normal forwards,
							star1 0.125s ease-in-out 0.625s 1 normal forwards,
							star2 0.125s ease-in-out 0.750s 1 normal forwards,
							star3 0.125s ease-in-out 0.875s 1 normal forwards;
					}
				}
				
				&.item-4 {
					z-index: 0;
					transform: translateX(-200%);
					
					&.dist {
						animation:
							star0 0.125s ease-in-out 0.500s 1 normal forwards,
							star1 0.125s ease-in-out 0.625s 1 normal forwards,
							star2 0.125s ease-in-out 0.750s 1 normal forwards,
							star3 0.125s ease-in-out 0.875s 1 normal forwards,
							star4 0.125s ease-in-out 1.000s 1 normal forwards;
					}
				}
			}
		}
		
		& .detailContainer {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 50%;
			height: 150px;
			transform: translateX(-50%) translateY(-75px);
			
			& .detail {
				height: 150px;
			}
		}
	}
}

@media screen and (min-width:1040px) {
	.staffContainer {
		width: calc(1040px - 200px - 40px - 2px - 20px - 100px);
		height: calc(1040px - 200px - 40px - 2px - 20px - 100px);
	}
}

@media screen and (min-width:1240px) {
	.staffContainer {
		width: calc(1040px - 200px - 40px - 2px - 20px - 100px);
		height: calc(1040px - 200px - 40px - 2px - 20px - 100px);
	}
}

@keyframes floating {
	100% {
		transform: translateY(-10px);
		box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
	}
	0% {
		transform: translateY(0px);
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8);
	}
}

@keyframes star0 {
	100% {
		top: -40%;
		left: 0%;
	}
	0% {
		top: 0%;
		left: 0%;
	}
}

@keyframes star1 {
	100% {
		top: 40%;
		left: 25.993575698632505%;
	}
	0% {
		top: -40%;
		left: 0%;
	}
}

@keyframes star2 {
	100% {
		top: -9.442719099991592%;
		left: -40%;
	}
	0% {
		top: 40%;
		left: 25.993575698632505%;
	}
}

@keyframes star3 {
	100% {
		top: -9.442719099991592%;
		left: 40%;
	}
	0% {
		top: -9.442719099991592%;
		left: -40%;
	}
}

@keyframes star4 {
	100% {
		top: 40%;
		left: -25.993575698632505%;
	}
	0% {
		top: -9.442719099991592%;
		left: 40%;
	}
}

</style>
