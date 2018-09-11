<template>
	<div  class="aside">
		<div class="menuHeader">
			<p class="text">ページ一覧</p>
			<p class="close" @click="closeMenu"><i class="far fa-window-close fa-2x"></i></p>
		</div>
		<ul class="menu">
			<li v-for="menu in menus">
				<a :href="menu.link"><img :src="menu.x1" :srcset="`${menu.x1} 1x, ${menu.x2} 2x`" :alt="menu.name"></a>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapMutations} from "vuex";
import FrameTemplate from "~/components/Logo.vue";

export default {
	data: () => ({
		menus: [
			"top",
			"access",
			"common",
			"circle",
			"cosplay",
			"flyer",
			"staff",
			"question",
		].map((name) => ({
			name,
			link: (name === "top") ? "/" : `/${name}/`,
			x1: require(`~/assets/img/menu/${name}_x1.png`),
			x2: require(`~/assets/img/menu/${name}_x2.png`),
		})),
	}),
	components: {
		Logo: FrameTemplate,
	},
	methods: {
		...mapMutations({
			closeMenu: "aside/closeMenu",
		}),
	},
};
</script>

<style scoped>
.aside {
	box-sizing: border-box;
	border-left: solid 1px black;
	height: 100%;
	
	& .menuHeader {
		display:flex;
		align-items: center;
		color: #fff;
		
		& .text {
			width: 100%;
			padding: 10px 0;
			font-size: 1.2rem;
			text-align: center;
		}
		
		& .close {
			padding: 5px;
			cursor: pointer;
		}
	}
	
	& .menu {
		margin: 0;
		padding: 0;
		list-style: none;
		
		& li {
			box-sizing: border-box;
			border: solid 2px rgb(19, 51, 97);
			transition: 0.2s background-color ease;
			overflow: hidden;
			
			&:hover {
				background-color: #352323;
			}
			
			&:not(:first-of-type) {
				border-top: none;
			}
			
			& img {
				vertical-align: bottom;
			}
		}
	}
}

@media screen and (min-width:840px) {
	.aside {
		& .close {
			display: none;
		}
	}
}
</style>
