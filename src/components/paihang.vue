<template>
	<div>
		
		<ul>
			<li v-for="data,index in paihanglist" :key="index" @click="handleClick(data.id)">
				<div class="about">
					<a href="#" class="pic-a">
						<img :src="data.picUrl" class="title-img" />
					</a>
					<div class="introduce">
						<p class="title">{{data.topTitle}}</p>
						<p class="song">1<span>{{data.songList[0].songname}}</span>-{{data.songList[0].singername}}</p>
						<p class="song">2<span>{{data.songList[1].songname}}</span>-{{data.songList[1].singername}}</p>
						<p class="song">3<span>{{data.songList[2].songname}}</span>-{{data.songList[2].singername}}</p>
					</div>
				</div>
			</li>
		</ul>
		<p class="maybe"><a href="http://url.cn/5CsRuUM" title="">去客户端发现更多好音乐 ></a></p>
		<router-view></router-view>
	</div>
</template>

<script>

import router from "@/router";
	export default{
		name : "paihang",
		data () {
			return {
				paihanglist:[]
			}
		},
		mounted(){
			fetch("/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510753999944").then(res=>res.json()).then(res=>{
				console.log(res);
				this.paihanglist = res.data.topList;
			})
		},

		methods:{
			handleClick(id){
				//编程式跳转
				//console.log(id);
				//第一种方式 类似于 get 请求传参
				//router.push(`/xiangqing?id=${id}`);
				//第二种方式
				router.push(`/xiangqing/${id}`);
			}
		}
	}	

</script>

<style lang="scss" scoped>
	li{
		list-style: none;
		background-color:#fff;
		margin:0.2rem 0.2rem;
	}
	.about{
		
		width:100%;
		height:2rem;
		margin-top:0.1rem;
		.pic-a{
			display: block;
			width:2rem;
			height:2rem;
			float: left;
		}
		.title-img{
			width:2rem;
			height:2rem;
		}
	}

	.introduce{
		float: left;
		padding-left:0.2rem;
		padding-top:0.1rem;
		.title{
			height:0.48rem;
			font-size:0.32rem;
			line-height: 0.48rem;
		}
	}

	.song{
		font-size:0.28rem;
		color: rgba(0,0,0,.5);
		width:4.6rem;
		overflow: hidden;
		-ms-text-overflow: ellipsis;
		white-space: nowrap;
		span{
			color: #000;
			margin-left: 8px;
			margin-right: 5px
		}
	}

	.maybe{
		width:100%;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		text-align: center;
		a{
			display: block;
			text-decoration: none;
			color:rgba(0,0,0,.6);
			font-size: 0.26rem
			
		}
	}
</style>