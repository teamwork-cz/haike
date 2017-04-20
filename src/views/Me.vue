<template>
	<section class="me">
	<div class="mebg">
		 <mt-header title="" class=" borderbred">

  
      <mt-button slot="right"
                 class=" car_black"></mt-button>
      <mt-button slot="right"
                 class=" box_black"></mt-button>
    </mt-header>
<section>
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
</section>
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

