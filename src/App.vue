<template>
  <div id="app">
    <navbar></navbar>
	<!-- <ul>
		<router-link to = "/tuijian" tag="li" activeClass="solitude">home</router-link>
	    <router-link to = "/paihang" tag="li" activeClass="solitude">card</router-link>
	    <router-link to = "/search" tag="li" activeClass="solitude">film</router-link>
	</ul> -->
    

    <section>
  		<router-view></router-view>
 	 </section>
  </div>

  
</template>

<script>
var ratio = window.devicePixelRatio;

var meta = document.getElementById("viewport");

document.documentElement.style.fontSize=document.documentElement.clientWidth/750*100+"px";
import navbar from "@/components/common/navbar";


export default {
  name: 'app',
  return (){

  },
  mounted(){

  },
  components:{
  	navbar
  }
}
</script>

<style lang="scss">
	*{
	  margin:0rem;
	  padding:0rem;
	}
	*:focus { outline: none; } 
	html,body{
	  width:100%;
	  height:100%;
	  background: #f4f4f4;
	}
	section{
	  position:relative;
	}
</style>
