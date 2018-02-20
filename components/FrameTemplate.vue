<template>
	<el-container>
		<el-container>
			<el-header><main-header :isAsideOpened="isAsideOpened"></main-header></el-header>
			<el-main>
				<slot></slot>
			</el-main>
			<el-footer><main-footer></main-footer></el-footer>
		</el-container>
		<el-aside :class="{hide: !isAsideOpened}" width="200px"><main-aside></main-aside></el-aside>
	</el-container>
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

<style>
.el-container {
	min-height: 100vh;
}
.el-header {
	display: flex;
	align-items: center;
	background-color: #285473;
}

.el-footer {
	display: flex;
	align-items: center;
	background-color: #285473;
	&>* {
		width: 100%;
		vertical-align: middle;
		text-align: center;
		font-size: 80%;
	}
}

.el-aside {
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: #1c5778;
	transition: right 0.2s ease-out 0s;
	z-index: 114514;
}

.el-main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	box-sizing: border-box;
	z-index: 1000;
	background-image:
		linear-gradient(transparent 80%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.3) 100%),
		linear-gradient(90deg, transparent 80%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.3) 100%);
	-webkit-background-size: 40px 40px;
	background-size: 40px 40px;
	background-color: #4881a9;

	&>* {
		width: 280px;
		height: 100%;
		transition: width 0.2s ease-out 0s;
		
		&:not(:first-child) {
			margin-top: 15px;
		}
	}
}

@media screen and (min-width:360px) {
	.el-main>* {
		width: 320px;
	}
}

@media screen and (min-width:400px) {
	.el-main>* {
		width: 360px;
	}
}

@media screen and (min-width:480px) {
	.el-main>* {
		width: 440px;
	}
}

@media screen and (min-width:640px) {
	.el-main>* {
		width: 600px;
	}
}

@media screen and (max-width:840px) {
	.el-aside {
		position: fixed;
		&.hide {
			right: -200px;
		}
	}
}

@media screen and (min-width:1040px) {
	.el-main>* {
		width: 800px;
	}
}

@media screen and (min-width:1240px) {
	.el-main>* {
		width: 1000px;
	}
}
</style>
