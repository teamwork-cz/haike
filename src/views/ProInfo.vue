<script>
 import { mapGetters, mapActions ,mapMutations} from 'vuex'
 // import { changePrice, changeStyle, addItem } from '../store/cart/actions'

 // import { changePrice, changeStyle, addItem } from '../vuex/actions'
 import { swiper} from '../components/'
 export default {
    name: 'ProInfo',
    data() {
      return {
        activeStyle: '',
        type: '', 
        imgs: [],            
        product: {
          name: 'Apple/苹果 iPhone 6S',
          desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
          price: '5288 - 6888',
          id:'1',
          isSelected: true,
          color: [
          {'text':'银色','value':'银色'},
          {'text':'深空灰色','value':'深空灰色'},
          {'text':'金色','value':'金色'},
          {'text':'玫瑰金色','value':'玫瑰金色'}
         ],
          selectesColor:'2',
          // activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          size: [
           {'text':'16GB','value':'16GB'},
          {'text':'64GB','value':'64GB'},
          {'text':'128GB','value':'128GB'},
          {'text':'玫瑰金色','value':'玫瑰金色'}
          ],
          selectesSize:'0',
          cart: []    

        }, 
       
     
      }
    },
 components: {
  swiper
  },
  methods: {
     ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList',
    ]),
    selectesColor (index) {
    this.product.selectesColor=index;
  },
    selectesSize (index) {
    this.product.selectesSize=index;
  },
   addPro() {
//   MessageBox.alert('操作成功').then(action => {

// });
      // const cartInfo = {
      //   proId:  this.product.id,
      //   count: 1, 
      // };

      // this.product.cart.push(cartInfo);
    },
    // [CHANGE_PRICE] (state, storage, price) {
  //   state.iPhone6S.activeStorage = storage
  //   state.iPhone6S.price = price
  //   state.iPhone6S.isSelected = false
  // },
  // [REMOVE_ITEM] (state, cartInfo) {
  //   state.cart.$remove(cartInfo)
  // }


    requestData (url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then(fn).then(this.completeLoad)
    },
  },
  created () {
    this.requestData('http://47.52.20.67/appMainTop/', (response) => {
      let data = response.data
      this.imgs = data.data.data.returnValue
      this.hotLists = data.data.data.returnValue
      
    })
  },
  }
</script>
<template>
  <div class="container f16">
    <div class="row">
  <section>
          <mt-button  slot="right">单品详情</mt-button>
        <mt-header fixed title="嗨克">
         <div slot="left">
         <mt-button v-link="'/'" ><</mt-button> 
         </div>
           <mt-button  slot="right" class="sprite box"></mt-button>
       </mt-header>
        <mt-badge class="single" type="error" size="small">99+</mt-badge>
     </section>


    <section class="">
      <swiper :imgs="imgs"></swiper>
    </section>
      <div class="bgw pl10 pr10">
          <div class="detail">
            <div class="pt10 pb10">
                <h3 class="name "><span v-text="product.name"></span></h3>
                <h4 class="f12 gray">价格：<span class="red f16" v-text="'￥'+product.price"></span></h4>         
            </div>
          
            <div class="options flexBox flex-col flex-cross-start border-top">                    
                <div class="f14 ">选择尺码：</div>            
                  <ul class="flexBox flex-row flex-wrap">
                    <li v-for="(item,index) in product.color"   
                        @click="selectesColor(index)"
                            :class="{active: index  == product.selectesColor}">
                        <span v-text="item.text"></span>
                      </li>
                  </ul>                 
                <div class="f14 ">选择颜色:</div>             
                  <ul class="flexBox flex-row flex-wrap">
                       <li v-for="(item,index) in product.size"   
                        @click="selectesSize(index)"
                            :class="{active: index  == product.selectesSize}">
                        <span v-text="item.text"></span>
                      </li>
                  </ul>
             </div>
           
          </div>
      
      </div> 
       <div class="fixedBottom wp100  bgw">   
       <div class="flexBox flex-row flex-main-center">
        <router-link :to="{ name: 'box'}">
          <mt-button size="normal" class=""  @click="addPro()">加入我的衣箱</mt-button>
          </router-link>
       </div>         
             
        </div>
    </div>

    <MessageBox></MessageBox>
    <!--  <div class="mask"></div> -->
  </div><!-- ./container -->
</template>
<style>
.pomegranage {
  color: #c0392b;
}
.detail dt {
  color: #95a5a6;
  width: 64px;
  padding: 4px 0;
}
.detail dd {
  margin-left: 64px;
  padding: 4px;
}
.options .title{
   font-size: 14px;
   height: 34px;
   line-height: 34px
}
.options ul {
  padding: 0;
}
.options ul > li {
  list-style: none;
   margin-right: 15px !important;
  padding: 7px 10px;
  margin: 10px 0px;
  background-color: #F0F2F5;
}

ul .active {
   background-color: #FF3F71 !important;
  color: #fff
}
</style>
