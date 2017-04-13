<template>
	<div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
    	<div class="swiper-slide" v-for="item in imgs">
				<img class="swiperimg" :src="'http://www.hykeyun.com/image?u=' + item.image"/>
		  </div>
    </div>
	<div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from '../../assets/js/swiper.min.js'
export default{
	name: 'swiper',
  data () {
	  return{
	  }
  },
  props: {
  	imgs: {
  		type: Array,
  		default: () => []
  	}
  },
  watch: {
  	imgs() {
  		this.$nextTick(() => {
		  	new Swiper ('.swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    autoplay : 2000,
				autoplayDisableOnInteraction : false,		    
			}) 
  		})
  	}
  }
}
</script>

<style>
	.swiperimg{
		width: 100%;
		height: 230px;
	}
	#swiper .swiper-pagination-bullet {
		background: #e5e8e8;
		opacity: 1; 
	}
	#swiper .swiper-pagination-bullet-active {
		background: #ff5733;
	}
</style>