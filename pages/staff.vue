<template>
	<frame-template>
		<card :title="title">
			<div class="staffContainer">
				<div class="iconContainer">
					<template v-for="({index, src}, id) in icons">
						<a class="iconButton" :class="{[`item-${index}`]: true, dist: isShow, enabled: detailEnabled}">
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
											<div><img class="icon" :src="icons[id].src"></div>
											<div><a class="twitter" target="_blank" :href="`https://twitter.com/${id}`"><i class="fab fa-twitter fa-2x"></i></a></div>
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
	data: () => ({
		title: "運営メンバー紹介",
		isShow: false,
		selectedId: null,
		detailEnabled: false,
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
	},
	mounted() {
		this.isShow = true;

		// 雑実装
		setTimeout(() => {
			this.detailEnabled = true;
		}, 1000);
	},
	components: {
		FrameTemplate,
		Card,
	},
};
</script>

<style scoped>
.fadedetail-enter-active {
  transition: opacity .5s;
}

.fadedetail-enter, .fade-leave-to {
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
			
			& .twitter {
				text-decoration: none;
			}
			
			& .mediaCell {
				width: 100px;
				& .icon {
					width: 100%;
					border: solid 1px #ccc;
					vertical-align: bottom;
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
				transition:
					opacity 1.0s linear 0s,
					top 0.3s ease-out 0.7s,
					left 0.3s ease-out 0.7s;
		
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
		
				&.item-0 {
					transform: translateX(200%);
					
					&.dist {
						top: -40%;
						left: 0%;
					}
				}
		
				&.item-1 {
					transform: translateX(100%);
					
					&.dist {
						top: 40%;
						left: 25.993575698632505%;
					}
				}
		
				&.item-2 {
					transform: translateX(0%);
					
					&.dist {
						top: -9.442719099991592%;
						left: -40%;
					}
				}
		
				&.item-3 {
					transform: translateX(-100%);
					
					&.dist {
						top: -9.442719099991592%;
						left: 40%;
					}
				}
		
				&.item-4 {
					transform: translateX(-200%);
					
					&.dist {
						top: 40%;
						left: -25.993575698632505%;
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
</style>
