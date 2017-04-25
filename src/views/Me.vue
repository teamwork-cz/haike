<template>
	<section class="me">
	<div class="mebg">
		 <div class="flexBox flex-row flex-main-end h45 flex-cross-center pr15" >
      <mt-button class=" car_black"></mt-button>
      <mt-button class=" box_black"></mt-button>
    </div>
		<div class="flexBox flex-row flex-cross-center  flex-main-arount h100  colorw">
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
			  <div class="flex3 tc">
			  	<div class="h16">关注</div>
			  	<div>12</div>
			  </div>
			    <div class="flex3 tc">
			  	<div class="h16">粉丝</div>
			  	<div>13</div>
			  </div>
			    <div class="flex3 tc">
			  	<div class="h16">被赞</div>
			  	<div>12</div>
			  </div>			
			</div>
	</div>
	
 <section class="p10 bgw">
 		<mt-cell class='bordergray'
		  title="我的订单"
		  to="/orders/1"
		  is-link
		  value="查看全部订单">
		</mt-cell>
		  <div class=" flexBox flex-row flex-main-arount flex-main-center bgw pt20 pb20  mt10">
        <div class="item " @click="goRoute({ name: 'orders', params: { id:2}})">
          <div class="dai dai1 mc"></div>待付款
        </div>
        <div class="item "  @click="goRoute({ name: 'orders', params: { id:3}})">
          <div class="dai dai2 mc"></div>待发货</div>
        <div class="item ">
          <div class="dai dai3 mc"  @click="goRoute({ name: 'orders', params: { id:4}})"></div>待收货</div>
        <div class="item ">
          <div class="dai dai4 mc"  @click="goRoute({ name: 'orders', params: { id:5}})"></div>待评价</div>
      </div>
 </section>
	
		<section class="mt10 bgw">
				<mt-cell  class=" plr10 bordergray"
			  title="我的优惠券"
			  to="/no"
			  icon="cuppon"
			  is-link
			  value="">
			</mt-cell>
			<mt-cell class='plr10'
			  title="收货地址"
			  icon="loca"
			  to="/address"
			  is-link
			  value="" >
			</mt-cell>
		</section>

						<mt-cell  class="plr10 bgw mt10"
					  title="我的推广"
					  to="/no"
					  icon="share"
					  is-link
					  value="">
					  </mt-cell>
					<mt-cell class="plr10 bgw mt10"
					  title="设置"
					  icon="setting"
					  to="/no"

					  is-link
					  value="">
					  	
					  </mt-cell>
	
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  components: {

  },
  methods: {
    ...mapMutations([
  
    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
    requestData(url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then((res) => {
        this.completeLoad()
        fn(res)
      })
    },
  },
  created() {


  }
}
</script>
<style>
.mebg {
  background: #fff url('../assets/images/mebg.png') center no-repeat;
  background-size: 100%;
}
.mintui{
	width: 20px;
	height: 20px;
  display: inline-block;
  position: relative;
  top: 5px
}
.mintui-cuppon{
  background: #fff url('../assets/images/cuppon.png') center no-repeat;
  	background-size: 20px;
}
.mintui-loca{
  background: #fff url('../assets/images/location.png') center no-repeat;
  background-size: 20px;
}
.mintui-share{
  background: #fff url('../assets/images/share.png') center no-repeat;
  background-size: 20px;
}
.mintui-setting{
  background: #fff url('../assets/images/setting.png') center no-repeat;
  background-size: 20px;
}
</style>

