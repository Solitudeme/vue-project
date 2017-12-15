<template>
	<nav>
		<div class="music">
			<span class="music_logo"></span>
		</div>
		
		<ul class="title" @click="handleClick($event)">
			<router-link to = "/tuijian" tag="li" activeClass="solitude">推荐</router-link>
			<router-link to = "/paihang" tag="li" activeClass="solitude">排行榜</router-link>
			<router-link to = "/search" tag="li" activeClass="solitude">搜索</router-link>
		</ul>
	</nav>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
	export default{
		name : "navbar",
		data () {
			return {
				
			}
		},
		methods:{
			handleClick(ev){
				//console.log(ev.target)
				//console.log(ev.currentTarget);
			}
		}
	}	

</script>

<!-- <style src="@/assets/iconfont/iconfont.css"></style> -->

<style lang="scss" scoped>
	.music{
		position: relative;
		width:100%;
		height:0.88rem;
		background-color:#31c27c;
		color:white;
	}
	.music_logo{
			float: left;
			display: block;
			width: 1.8rem;
			height: 0.5rem;
			margin:0.2rem 0 0 0.1rem;
			line-height: 0.25rem;
			font-size: 0.24rem;
			background:url(../../assets/logo-yinyue.png) no-repeat;
			background-size: 1.8rem 0.5rem;
	}
	.title{
		width:100%;
		display: -webkit-box;
		background: #fff;
		li{
			-webkit-box-flex: 1;
			position: relative;
			display: block;
			height: 0.8rem;
			line-height: 0.8rem;
			overflow: hidden;
			text-align: center;
			font-size: 0.36rem;
			list-style: none;
		}
	}
	.solitude{
		border-bottom:0.02rem solid #31c27c;
		color:#31c27c;
	}
</style>