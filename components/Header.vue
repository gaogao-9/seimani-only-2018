<template>
	<div class="header">
		<h1 class="title">
			<a v-if="titleStyle === 'short'" href="/"><p class="maintitle">漕ぎ出せ！ソクバイ海</p><p class="subtitle">～関係ないけど、アイムソウリー！～</p></a>
			<a v-else-if="titleStyle === 'middle'" href="/"><p class="maintitle">政剣マニフェスティアオンリー同人誌即売会</p><p><span class="maintitle">漕ぎ出せ！ソクバイ海</span>&nbsp;<span class="subtitle">～関係ないけど、アイムソウリー！～</span></p></a>
			<a v-else href="/"><p class="maintitle">政剣マニフェスティアオンリー同人誌即売会&nbsp;緊急交流会イベント</p><p><span class="maintitle">漕ぎ出せ！ソクバイ海</span>&nbsp;<span class="subtitle">～関係ないけど、アイムソウリー！～</span></p></a>
		</h1>
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
	data() {
		return {
			titleStyle: "long",
		};
	},
	mounted() {
		this.$nextTick(() => {
			const mql = window.matchMedia("(max-width: 490px)");
			const changeTitleStyle = this.changeTitleStyle("short");

			changeTitleStyle.call(this, mql);
			mql.addListener(changeTitleStyle);
		});
		this.$nextTick(() => {
			const mql = window.matchMedia("(min-width: 491px) and (max-width: 630px)");
			const changeTitleStyle = this.changeTitleStyle("middle");

			changeTitleStyle.call(this, mql);
			mql.addListener(changeTitleStyle);
		});
		this.$nextTick(() => {
			const mql = window.matchMedia("(min-width: 631px)");
			const changeTitleStyle = this.changeTitleStyle("long");

			changeTitleStyle.call(this, mql);
			mql.addListener(changeTitleStyle);
		});
	},
	methods: {
		changeTitleStyle(style) {
			return (mql) => {
				if(mql.matches) this.titleStyle = style;
				if(mql.matches) console.log(style, this);
			};
		},
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
	
	& .title {
		line-height: 1;
		font-size: 1rem;
		width: calc(100% - 40px);
		
		& a {
			color: white;
			line-height: 1.5;
			text-decoration: none;
			vertical-align: middle;
			
			& .maintitle {
				font-size: 1.2rem;
			}
			
			& .subtitle {
				text-align: right;
				font-size: 0.8rem;
			}
		}
	}
	
	& .menuOpenButton {
		color: white;
		cursor: pointer;
	}
}

@media screen and (min-width:491px) {
	.header {
		& .title {
			width: auto;
		}
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
