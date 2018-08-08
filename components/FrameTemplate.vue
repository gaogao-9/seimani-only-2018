<template>
	<div class="container row">
		<div class="container col">
			<header id="header"><main-header :isAsideOpened="isAsideOpened"></main-header></header>
			<main class="main">
				<slot></slot>
			</main>
			<footer id="footer"><main-footer></main-footer></footer>
		</div>
		<menu id="menu" :class="{hide: !isAsideOpened}"><main-aside></main-aside></menu>
	</div>
</template>

<script>
import MainHeader from "~/components/Header.vue";
import MainFooter from "~/components/Footer.vue";
import MainAside from "~/components/Aside.vue";

export default {
	computed: {
		isAsideOpened() {
			return this.$store.state.aside.isOpen;
		},
	},
	components: {
		MainHeader,
		MainFooter,
		MainAside,
	},
};
</script>

<style scoped>
:root {
	font-size: 16px;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.container {
	&.row {
		display: flex;
		overflow: hidden;
		& > * {
			width: 100%;
		}
	}
	&.col {
		min-height: 100vh;
	}
}
#header {
	display: flex;
	align-items: center;
	height: 70px;
	line-height: 1;
	background-color: #285473;
	
	&>* {
		padding: 0 15px;
	}
	
	& h1 {
		font-size: 1.5rem;
	}
}

#footer {
	display: flex;
	align-items: center;
	height: 60px;
	background-color: #285473;
	
	&>* {
		width: 100%;
		vertical-align: middle;
		text-align: center;
		font-size: 80%;
	}
}

#menu {
	position: relative;
	margin: 0;
	padding: 0;
	width: 200px;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: #1c5778;
	transition: right 0.2s ease-out 0s;
	z-index: 114514;
}

.main {
	flex: auto;
	overflow: hidden;
	box-sizing: border-box;
	z-index: 1000;
	min-height: calc(100vh - 70px - 60px);
	width: 100%;
	background-image:
		linear-gradient(transparent 80%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.3) 100%),
		linear-gradient(90deg, transparent 80%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.3) 100%);
	-webkit-background-size: 40px 40px;
	background-size: 40px 40px;
	background-color: #4881a9;

	&>* {
		margin: 0 auto;
		width: 280px;
		transition: width 0.2s ease-out 0s;
		
		&:not(:first-child) {
			margin-top: 15px;
		}
	}
}

@media screen and (min-width:360px) {
	.main>* {
		width: 320px;
	}
}

@media screen and (min-width:400px) {
	.main>* {
		width: 360px;
	}
}

@media screen and (min-width:480px) {
	.main>* {
		width: 440px;
	}
}

@media screen and (min-width:640px) {
	.main>* {
		width: 600px;
	}
}

@media screen and (max-width:840px) {
	#menu {
		position: fixed;
		&.hide {
			right: -200px;
		}
	}
}

@media screen and (min-width:1040px) {
	.main>* {
		width: 800px;
	}
}

@media screen and (min-width:1240px) {
	.main>* {
		width: 1000px;
	}
}
</style>
