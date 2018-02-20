<template>
	<div class="card">
		<template v-if="title">
			<h1>{{ title }}</h1>
			<hr>
		</template>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
	},
};
</script>

<style>
.card {
	box-sizing: border-box;
	padding: 10px;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
	
	& h1 {
		margin: 5px;
	}
	
	& hr {
		margin-bottom: 10px;
	}
}
</style>
