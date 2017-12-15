<template>
	<div>
		<swipe class="my-swipe">
		  <swipe-item v-for="data,index in tuijianlist" :key="index">
				<img :src="data.picUrl" />
		  </swipe-item>
		</swipe>
		<div class="content">
			<h2 class="title">电台</h2>
			<ul class="once">
				<li v-for="data in contentlist" :key="">
					<img :src="data.picUrl"/>
					<p>{{data.Ftitle}}</p>
				</li>
			</ul>
		</div>
		<div class="hot">
			<p class="te">热门歌单</p>
			<p class="maybe"><a href = "http://url.cn/5imhQFM">去客户端发现更多好音乐 ></a></p>
			<p class="maybe good"><a href = "https://y.qq.com/?ADTAG=myqq#type=index">查看电脑版网页</a></p>
			
			<img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=19830212&d=20151105145423"
			class="qqimg">
			<p class="footer">Copyright © 1998 - <span id="js_cpright_year">2017</span> Tencent. All Rights Reserved.</p>
			<p class="footer">联系电话：0755-86013388 QQ群：55209235</p>
		</div>
	</div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";//css模块化导入
import { Swipe, SwipeItem } from 'vue-swipe';

	export default{
		name : "tuijian",
		data () {
			return {
				tuijianlist:[],
				contentlist:[]
			}
		},
		mounted(){
			fetch("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510729145449").then(res=>res.json()).then(res=>{
				console.log(res);
				this.tuijianlist = res.data.slider;
			}),

			fetch("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510729145449").then(res=>res.json()).then(res=>{
				this.contentlist = res.data.radioList;
			})
			 },
		components:{
			swipe:Swipe,
			"swipe-item":SwipeItem
		}
	}	
</script>

<style lang="scss" scoped>
	.my-swipe {
	  height: 3rem;
	  img{
	  	width:7.5rem;
	  	height:3rem;
	  }
	}
	.cotent{
		margin:0 0.1rem 0.07rem 0.1rem;
	}
	.title{
		font-size: 0.32rem;
	    color: #000;
	    margin-top:0.25rem;
	    margin-left:0.20rem;
	    margin-bottom: 0.25rem;
	    font-weight: normal;
	}
	.once{
		width:100%;
		height:4.40rem;
		margin:0 0.1rem 0 0.2rem;
		li{
			width:3.4rem;
			height:4.38rem;
			background:#fff;
			list-style: none;
			float: left;
			margin-right: 0.16rem;	
			padding-left: 0.05rem;
			img{
				width:3.47rem;
				display: block;
				margin-bottom: 0.1rem;
			}
			p{
				font-size: 0.28rem;
			}
		}
	}

	.hot{
		
		padding-left:0.2rem;
		margin-top: 0.2rem;
		text-align: center;
		.te{
			font-size: 0.3rem;
		}
	}

	.maybe{
		width:100%;
		margin-top: 0.5rem;
		text-align: center;
		a{
			display: block;
			text-decoration: none;
			color:rgba(0,0,0,.6);
			font-size: 0.3rem
			
		}
	}

	.good{
		a{
			color:#000;
			display: block;
			font-size: 0.24rem;
		}
		
	}

	.qqimg{
		
			display: inline-block;
			width:1.8rem;
			height:0.5rem;
		
	}

	.footer{
			font-size: 0.16rem;
			color:rgba(0,0,0,.5);
	}
		
</style>