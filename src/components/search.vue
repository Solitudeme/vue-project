<template>
	<div>
		<div class="mod_search_bar" >
	        <div id="input_wrap" class="search_bar_cont" >
	            <form id="search_form" method="get" action="#" onsubmit="return false">
	                <input id="search_input" class="search_input" type="search" autocomplete="off" style="-webkit-appearance: textfield;" autocorrect="off" placeholder="搜索歌曲、歌单、专辑"@focus="pretty()">
	                <span class="icon icon_search">搜索</span>
	                <span id="del_btn" class="icon icon_delete" style="display: none;" >删除</span>
	            </form>
	        </div>
	        <div id="cancel_btn" class="search_bar_tip_text" style="display: none;" v-show="isShow" @click="good()">取消</div>
	    </div>

	    <div id="hot_keys" class="mod_search_result" style="" v-show="show">
		    <h3 class="result_tit">热门搜索</h3>
		    <div class="result_tags">
		        <a href="https://y.qq.com/m/act/singchina2/index.html?ADTAG=myqq" class="tag_s tag_hot">中国新歌声第二季</a>
		        <a href="javascript:;" class="js_keyword tag_s">DJ舞曲(华语)系列5 DJ </a>
		        <a href="javascript:;" class="js_keyword tag_s">WHAT ARE WORDS </a>
		        <a href="javascript:;" class="js_keyword tag_s">中国好声音 第六季 </a>
		        <a href="javascript:;" class="js_keyword tag_s">非酋 薛明媛/朱贺 </a>
		        <a href="javascript:;" class="js_keyword tag_s">一生所爱 卢冠廷 </a>
		        <a href="javascript:;" class="js_keyword tag_s">舍得 </a>
		        
		    </div>
	    </div>
	</div>
</template>

<script>
	export default{
		name : "search",
		data () {
			return {
				isShow:false,
				show:true
			}
		},
		methods:{
			pretty(){
				console.log('focus')
				this.isShow = true;
				this.show = false;
			},
			good(){
				this.isShow = false;
				this.show = true;
			}

		}
	}	

</script>

<style lang="scss" scoped>
	.mod_search_bar {
		height:0.72rem;
	    background: #f4f4f4;
	    padding: 0.2rem;
	    display: -webkit-box;
	    -webkit-box-orient: horizontal;
	    -webkit-box-align: center
	}
	#input_wrap{
		position: relative;
		border-radius: 3px;
		background: #fff;
		height: 20px;
		padding: 8px 12px 8px 35px;
		-webkit-box-flex: 1;
	}
	#search_input {
		width:5.1rem;
		position: absolute;
	    height: 0.4rem;
	    line-height: 0.4rem;
	    color: rgba(0,0,0,.3);
	    border: none;
	    font-size: 0.28rem;
	}

	.mod_search_bar .icon_search {
	    position: absolute;
	    top: 9px;
	    left: 10px;
	    width: 0.36rem;
	    height: 0.36rem;
	    background: url(../assets/serch.png); 
	    background-repeat: no-repeat;
	    background-size: cover;
	    text-indent: -9.99rem;
	}


	.mod_search_result {
	    background: #fff;
	    padding: 0.3rem 0.3rem 0.2rem 0.3rem;
	    font-size: 0.28rem;
	    .result_tit {
	        color: rgba(0,0,0,.6);
	        margin-bottom: 0.16rem;
	    }
	}
	.tag_s {
	    display: inline-block;
	    font-size: 14px;
	    padding: 0 10px;
	    height: 30px;
	    line-height: 30px;
	    color: #000;
	    border: 1px solid rgba(0,0,0,.6);
	    border-radius: 99px;
	    word-break: keep-all;
	    margin-bottom: 10px;
	    margin-right: 14px;
	    text-decoration:none;
	}
	.tag_hot {
		    color: #fc4524;
		    border-color: #fc4524;
	}
	.mod_search_bar .search_bar_tip_text {
	    padding-right: 10px;
	    padding-left: 10px;
	    font-size: 14px;
	    height: 36px;
	    line-height: 36px;
	    color:rgba(0,0,0,.8);
	}

	.mod_search_bar .icon_delete {
	    position: absolute;
	    top: 9px;
	    right: 12px;
	    width: 18px;
	    height: 18px;
	    background: #b1b1b1;
	    text-indent: -9999px;
	    border-radius: 99px;
	}
</style>