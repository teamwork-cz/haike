<template>
  <section id='hot'>
  	<ul>
  		<li :class="{'border-bottom': hotLists[hotLists.length-1] != item}" v-for="item in hotLists">
         <router-link :to="{ name: 'detail', params: { id: `${item.brandId}`}}">
             <mt-cell v-bind:title="item.title" v-bind:label="item.title"  is-link value="全部"></mt-cell> 
         </router-link>         
  			<figure class="m-img">
          <img class="" v-lazy.container="'http://www.hykeyun.com/image?u=' + item.image"/>
  				<!-- <img v-lazyload="'http://www.hykeyun.com/image?u=' + item.image" />		 -->
  			</figure>
        <div class="flexBox flex-row flex-main-arount pt10 pb10">
         <router-link v-for="itemds in item.appMainBodyDs" :to="{ name: 'proInfo', params: { id:`${itemds.pdsId}`}}" class="itemds ml10 flex1" >
         <div>
             <img class="" v-lazy.container="'http://www.hykeyun.com/image?u=' + itemds.image"/>
             <div>{{itemds.title}}</div>
            </div>
          </router-link>
        </div>
        </li>     
    </ul>
   </section>
  	
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
  name: 'hot',
  data () {
	  return{
	  }
  },
  props: {
  	'hotLists': {
  		type: Array,
  		default: () => []
  	}
  },
  methods: {
    // initSwiper () {
    //   this.$nextTick(() => {
    //     var swiper2 = new Swiper('#swiperLabel2', {
            
    //       slidesPerView: 'auto',
    //       centeredSlides: false,
    //       spaceBetween: 1
    //     })
    //   })
    // }
  },
 // created () {
 //    this.initSwiper()
 //  },
  }

</script>

<style>
.mint-cell-label{
  color: #999
}
#hot {
    box-sizing: border-box;
    margin-bottom: 10px;      
   
}
#hot li {
	padding: 0px 10px;
  margin: 10px 0px;
  background-color: #fff;
  background-color: #fff;
  margin-top: 10px;
}
.m-img {
	width: 100%;
	height: 190px;
}
.m-img img {
	opacity: 0.7;
	transition: opacity .7s ease-in;
}
.m-img img,
.play-icon img {
	width: 100%;
	height: 100%;
}
.play-icon {
	width: 17px;
	height: 17px;
	left: 50%;
	top: 50%;
	margin-left: -8.5px;
	margin-top: -8.5px;
	display: none;
}
.m-act,
.mr {
	margin-left: 76px;
}
.m-act {
	margin-right: 15px;
}
.mr {
	padding: 0 15px 23px 0;
	box-sizing: border-box;
}
.m-buy {
	margin-top: 30px;
}
.buy-btn,
.forward-buy-btn {
	height: 24px;
	width: 45px;
	line-height: 20px;
	text-align: center;
	background-color: #fff;
	outline: none;
	border-radius: 3px;
	font-weight: bold;
}
.buy-btn {
	border: 1px solid #ff4d64;
	color: #ff4d64;
}
.forward-buy-btn  {
	border: 1px solid #37b7ff;
	color: #37b7ff;
}
.full-star {
	margin-top: 7px;
  width: 50px;
  height: 10px;
  background-size: auto 100%;
  background-image: url('../../assets/images/nostart.svg');
}
.score-start {
	width: 100%;
	height: 100%;
	background-size: auto 100%;
	background-image: url('../../assets/images/star.svg');
}
.score {
	right: -21px;
	top: -1px;
	font-size: 10px;
	color: #9c9c9c;
}
.m-info {
	margin-right: 50px;
}
.m-info h2 {
	margin-top: 3px;
	max-width: 68%;
	display: inline-block;
}
.m-info span {
	display: inline-block;
}
.m-info p:nth-of-type(1) {
	margin-top: 12px;
}
.m-info p:nth-of-type(2) {
	margin-top: 6px;
}
.m-info p {
	font-size: 13px;
	color: #9c9c9c;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.m-act {
	display: -webkit-flex; /* Safari */
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-top: 8px;
	padding-bottom: 8px;
}
.m-act span:first-child {
	color: #fea54c;
}
.m-act span:last-child {
	color: #9c9c9c;
	text-indent: 8px;
}
.m-act span {
	box-sizing: border-box;
	width: 50%;
	display: inline-block;
}
.m-name {
	height: 20px;
	color: #333;
}
.type-3d {
	margin-top: 5px;
	width: 17px;
  height: 17px;
	background-image: url('../../assets/images/3d.svg');
}
.type-imax {
	margin-top: 5px;
	width: 27px;
  height: 15px;
	background-image: url('../../assets/images/imax.svg');
}
.type-3dimax {
	margin-top: 5px;
	width: 45px;
	height: 17px;
	background-image: url('../../assets/images/3dimax.svg');
}
.type-3d,
.type-imax,
.type-3dimax {
	margin-left: 5px;
	background-size: 100%;
	background-repeat: no-repeat;
	float: left;
}



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
  padding: 10px 0px;
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
.crew-img {
  height: 100px;
}
.am-img img{
  height: 140px;
  width: 100px;
/*   border-radius: 5px;*/
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
  width: 100%;
}
#swiperLabel .crew-swiper-container {
}
#swiperLabel .swiper-slide {
  text-align: center;
  font-size: 12px;
  width: 100px !important;
  background: #fff;
  margin-right: 10px;
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
.itemds:first-child{
  margin-left: 0px;
}
</style>


