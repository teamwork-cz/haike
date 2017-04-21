<template>
	<section class="me">
	<div class="mebg">
		 <div class="flexBox flex-row flex-main-end h45 flex-cross-center pr15" >
      <mt-button class=" car_black"></mt-button>
      <mt-button class=" box_black"></mt-button>
    </div>
		<div class="flexBox flex-row flex-cross-center flex-main-between h100  colorw">
		<div class="flexBox flex-row flex-cross-center pl10 pr10">
			 <div class="cir_img"></div>
			 <div class="flexBox flex-col pl10">

				  <div class="f18">昵称</div>
				  <div class="f14">积分：1240</div>
			</div>
		</div>
			
			<div class="pr10">
				 <mt-button size="small" class="joinBoder f14">立即加入会员</mt-button>
			</div>
		</div>
			<div class="flexBox flex-row flex-cross-center flex-main-between h45 rgba">
			  <div class="flexBox flex-col">
			  	<div class="h16">关注</div>
			  	<div>12</div>
			  </div>
			    <div class="flexBox flex-col">
			  	<div>粉丝</div>
			  	<div>13</div>
			  </div>
			    <div class="flexBox flex-col">
			  	<div>被赞</div>
			  	<div>12</div>
			  </div>
				
			</div>


	</div>
	

		<mt-cell
		  title="我的电影票"
		  to="/no"
		  is-link
		  value="">
		</mt-cell>
		<mt-cell
		  title="优惠券"
		  to="/no"
		  is-link
		  value="">
		</mt-cell>
		<mt-cell
		  title="兑换券"
		  to="/no"
		  is-link
		  value="">
		</mt-cell>
		<mt-cell
		  title="帮助中心"
		  to="/no"
		  is-link
		  value="">
		</mt-cell>
	</section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data () {
		return {
		}
	},
	components: {
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad'
		])
	},
	created () {
	}
}
</script>

<style>
.mebg {
  background: #fff url('../assets/images/mebg.png') center no-repeat;
  background-size: 100%;
}
</style>

