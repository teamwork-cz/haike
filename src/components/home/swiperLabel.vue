<!-- <template>
	<section id="swiperLabel">	
		<section >
			<section class="ab-photo pr border-1px-bottom">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				         <div class="swiper-slide" >
				        	<div class="am-img pr">
				        		<img src="https://gw.alicdn.com/i1/TB1xY8QJpXXXXXRXVXXXXXXXXXX_.jpg" alt="">
				        		<div class="am-title pa">
				        			<p class="tddd">bibibibibibi</p>
				        		</div>
				        	</div>
				        </div>
				    </div>
				</div>
			</section>
		</section>
	</section>
</template>

<script>
import Swiper from '../../assets/js/swiper.min.js'
import { mapMutations } from 'vuex'
export default{
	data () {
		return {
			hideSomething: true,
			detailObj: {},
			infoObj: false,
			evalLists: []
		}
	},
	methods: {
    initSwiper () {
    	this.$nextTick(() => {
    		var swiper = new Swiper('.swiper-container', {
  		    pagination: '.swiper-pagination',
  		    slidesPerView: 'auto',
  		    centeredSlides: false,
  		    spaceBetween: 5
    		})
    	})
    }
	},
	created () {
		let id = this.$route.params.id
		let hotLists = this.$store.state.city.data
		let comingLists = this.$store.state.coming.lists
		//由于后台没有配置更多的请求接口，
		//电影详情页的数据是从全局（vuex）拿过来的
		if (comingLists.length) {
			this.detailObj = this.getDataById(comingLists, id)
		} else if (!comingLists.length && !hotLists.length) {
			this.$router.push('/')
		} else {
			this.detailObj = this.getDataById(hotLists, id)
		}

		let detailStr = this.detailObj.detailStr
		if (detailStr) {
			this.requestData(`/movie/info/?name=${detailStr}`, (response) => {
				let data = response.data 
				this.infoObj = data.data.data.returnValue
				this.initSwiper()
			})
			this.requestData(`/movie/evaluation/?name=${detailStr}`, (response) => {
				let data = response.data
				this.evalLists = data.data.data.returnValue
			})
		} else {
			this.infoObj = false
		}
		this.initSwiper()
	}
}
</script>

<style>
.border-1px-bottom {
	border-bottom: 1px solid #d9d9d9;
}
.mbg {
	height: 10rem;
	height: 50vmin;
	background: url('../../assets/images/mbg.png') no-repeat;
	background-size: 100% auto;
	padding-left: 15px;
	overflow: hidden;
	box-sizing: border-box;
}
.d-cover {
	position: absolute;
	bottom: 0;
	z-index: 1;
	background: #ccc;
	width: 33.10vmin;
	min-width: 6.25rem;
	min-width: 31.3vmin;
	height: 46.3vmin;
}
.d-cover img {
	width: 100%;
	height: 100%;
}
.d-info {
	display: inline-block;
	margin: 3.8vmin 0 0 37.5vmin;
	color: #fff;
	width: 55%;
}
.d-info p {
	opacity: .8;
	font-size: .75rem;
	line-height: .875rem;
	line-height: 4.4vmin;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	width: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.d-info p.d-name {
	position: relative;
	font-size: 1.125rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	max-height: 3rem;
	max-height: 15vmin;
	overflow-y: hidden;
	margin-bottom: .375rem;
	margin-bottom: 1.9vmin;
	color: #fff;
	opacity: 1;
}
.mbg .full-star {
	margin-top: 6vmin;
}
.mbg .score {
	right: -32px;
	top: 1px;
	color: #fff;
	font-size: 12px;
}
.mbg .full-star {
	width: 70px;
	height: 14px;
}
.intro-block {
}
.d-intro {
	padding: 20px 15px;
	box-sizing: border-box;
	background-color: #fff;
}
.d-intro p {
	word-break: break-word;
	margin-bottom: .75rem;
	margin-bottom: 3.8vmin;
	font-size: .9375rem;
	line-height: 1.5rem;
	line-height: 7.5vmin;
	color: #333;
	overflow: hidden;
}
.d-intro p.d-control {
	text-align: center;
	font-size: 1.1rem;
}
.ab-photo {
	padding: 15px 15px 25px;
	box-sizing: border-box;
	background-color: #fff;
}
.crew-ab-photo {
	padding: 15px 15px 0px;
}
.ab-header {
	z-index: 1000;
}
.ab-header span {
	font-size: .9375rem;
	line-height: 2rem;
	line-height: 10vmin;
	color: #000;
}
.hide-something {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.am-img {
	height: 124px;
}
.crew-img {
	height: 100px;
}
.am-img img{
	height: 100%;
	width: auto;
}
.am-title {
	width: 100%;
}
.am-title p {
	text-align: center;
}
.am-title p:first-child {
	color: #333;
	font-size: 13px;
}
.am-title p:last-child {
	color: #999;
	font-size: 11px;
}
#swiperLabel .swiper-container {
	height: 202px;
  width: 100%;
  overflow: initial;
  overflow-x: hidden;
}
#swiperLabel .crew-swiper-container {
	margin-top: 7px;
	height: 165px;
}
#swiperLabel .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
#swiperLabel .swiper-slide:nth-child(2n),
#swiperLabel .swiper-slide:nth-child(3n) {
    width: auto;
}
.no-data {
	padding: 60px;
	font-size: 16px;
	color: #666;
	text-align: center;
}
</style>

 -->