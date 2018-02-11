<template>
  <div class="footer">
  	<div class="gear left">
	  	<i class="a fas fa-spin fa-cog fa-3x"></i>
	  	<i class="b fas fa-spin-reverse fa-cog fa-5x"></i>
	  	<i class="c fas fa-spin fa-cog fa-4x"></i>
  	</div>
  	<div class="gear right">
	  	<i class="d fas fa-spin-reverse fa-cog fa-3x"></i>
	  	<i class="a fas fa-spin fa-cog fa-3x"></i>
	  	<i class="b fas fa-spin-reverse fa-cog fa-5x"></i>
	  	<i class="c fas fa-spin fa-cog fa-4x"></i>
  	</div>
  	<p class="text">
  		政剣マニフェスティアオンリーイベント<br>
  		戦挙管理委員会
  	</p>
  </div>
</template>

<script>
export default {
	mounted() {
		this.isShow = true;
	},
};
</script>
<style scoped>
.footer {
	position: relative;
	color: white;
	
	& .text {
		position: relative;
	}
	
	& .gear.right {
		position: absolute;
		top: -10px;
		right: -20px;
		bottom: -10px;
		overflow: hidden;
		
		&>* {
			position: relative;
			display: inline-block;
		}
		& .a {
			color: #756b4f;
			top: -10px;
			left: 25px;
		}
		& .b {
			top: 10px;
			left: 15px;
			color: #65674e;
		}
		& .c {
			top: 15px;
			left: 5px;
			color: #756b4f;
		}
		& .d {
			top: 10px;
			left: 37px;
			color: #65674e;
		}
	}
	
	& .gear.left {
		position: absolute;
		top: -10px;
		left: -25px;
		bottom: -10px;
		overflow: hidden;
		
		&>* {
			position: relative;
			display: inline-block;
		}
		& .a {
			color: #756b4f;
			top: -8px;
			left: -2px;
		}
		& .b {
			top: -15px;
			left: -10px;
			color: #65674e;
		}
		& .c {
			top: 15px;
			left: -30px;
			color: #756b4f;
		}
	}
}

.fa-spin-reverse {
  -webkit-animation: fa-spin-reverse 2s infinite linear;
  animation: fa-spin-reverse 2s infinite linear;
}
@-webkit-keyframes fa-spin-reverse {
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  0% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes fa-spin-reverse {
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  0% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
