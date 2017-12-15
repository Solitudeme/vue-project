<template>
<div>
	<div class="bg">
		<div class="bao">
			<div class="left">
				<img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000004MFDGO0f2jVn.jpg?max_age=2592000" class="pic"/>
			</div>
			<div class="right">
				<p class="title">{{songinfo.ListName}}</p>
				<p class="day" v-if="">第{{singinfo.day_of_year}}天</p>
				<p class="day">{{singinfo.date}}更新</p>
			</div>
		</div>
		
		<div class="btn">
			播放全部
		</div>
	</div>
	<div class="content">
		<div class="title1">
			排行榜  共{{singinfo.cur_song_num}}首
		</div>
		<ul >
			<li v-for="(data,index) in singerinfo">
				<span class="math min" v-if="index>=3">{{index+1}}</span>
				<span class="math max" v-else="index<3">{{index+1}}</span>
				<div class="songname">
					<p class="name">{{data.data.albumname}}</p>
					<p class="singer" >{{data.data.singer[0].name}}</p>
				</div>
			</li>
		</ul>
		<p class="jian">简介</p>
		<p class="describe" v-html="songinfo.info">{{songinfo.info}}</p>
	</div>
</div>
	
</template>

<script>
import axios from "axios";
	export default{
		name : "xiangqing",
		data () {
			return {
				songinfo:[],
				singinfo:[],
				singerinfo:[]

			}
		},
		mounted(){
			//获取id值
			//第一种获取id的方式
			//console.log(this.$route.query);
			//第二种获取id的方法
			console.log(this.$route.params.solitudeid); 
			// /v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${this.$route.params.solitudeid}&_=1510987946214

//https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${this.$route.params.solitudeid}&_=1511078299507
			axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${this.$route.params.solitudeid}&_=1511080074794`).then(res=>{
				console.log(res.data);
				this.songinfo = res.data.topinfo;
				this.singinfo = res.data;
				this.singerinfo = res.data.songlist;
				this.songinfo = res.data.topinfo;
			})
		}
	}	

</script>

<style lang="scss" scoped>
	.bg{
		background-color: rgba(0,0,0,0.6);
		width:100%;
		height:5rem;
		padding:0.3rem;
		box-sizing: border-box;
	}
	.pic{
		display: block;
		width: 2.5rem;
		height:2.5rem;
	}
	.bao{
		height:2.5rem;
	}
	.left{
		float: left;
		margin-right: 0.2rem;
	}
	.right{
		float: left;
		padding-top: 0.2rem;
		.title{
			width:4.16rem;
			height:0.46rem;
			line-height:0.46rem;
			font-size:0.36rem;
			color:#fff;
		}
		.day{
			width:4.16rem;
			height:0.46rem;
			line-height:0.46rem;
			font-size:0.2rem;
			color:#fff;
		}
	}
	.btn{
		width: 3.4rem;
	    height: 0.8rem;
	    overflow: hidden;
	    text-align: center;
	    font-size: 0.32rem;
	    color: #fff;
	    border-radius: 0.6rem;
	    background: #31c27c;
	    line-height: 0.8rem;
	    margin:0.3rem 0 0 1.6rem;
	}

	.title1{
		font-size: 0.28rem;
		position: relative;
		    display: -webkit-box;
		    -webkit-box-align: center;
		    height: 54px;
		    margin: 0 16px -10px;
		    color:#777;
	}

	ul{
		li{
			width: 100%;
			height:1.24rem;
			list-style: none;
		}
	}
	.math{
		float: left;
		display:inline-block;
		width: 0.9rem;
		height:1.24rem;
		text-align: center;
		line-height: 1.2rem;
		font-size: 0.3rem;
	}
	.min{
		color:#777;
	}
	.max{
		color:#FF400B;
	}

	.songname{
		float: left;
	}

	.name{
		font-size: 0.30rem;
		width:6.15rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin:0.1rem 0;
	}
	.singer{
		font-size: 0.24rem;
		width:6.15rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color:rgba(0,0,0,0.6);
	}
	.jian{
		font-size: 0.4rem;
		text-align: center;
	}
	.describe{
		font-size: 0.3rem;
	}
</style>