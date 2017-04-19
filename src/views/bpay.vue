<template>
  <section>
    <mt-header 
               title="选择卡类型">
        <div slot="left">
         <mt-button v-link="'/'" ><</mt-button> 
         </div>
    </mt-header>
   <section class=" bgw p10 cardList">
       <div class="wth100 flexBox flex-row flex-main-arount gray">
        <div class="item tc flex3 pt10 cardactive ">
           <div class="f14">月卡</div>
           <div class="f20">￥2543</div>
           <div class="f14">会员期+365天</div>
        </div>
         <div class="item tc flex3 pt10 ">
           <div class="f14">月卡</div>
           <div class="f20">￥2543</div>
           <div class="f14">会员期+365天</div>
        </div>
         <div class="item tc flex3 pt10 ">
           <div class="f14">月卡</div>
           <div class="f20">￥2543</div>
           <div class="f14">会员期+365天</div>
        </div>
       </div>
    </section> 
 <section class="mt10 p10">
   <div class=" pt20 tc">有效期剩余365天</div>
   <mt-cell  title="原价(499/月x6月)" value="顺丰"></mt-cell>
   <mt-cell title="长期折扣卡"  is-link>
      <span class="cred">-300</span>
   </mt-cell>
    <mt-cell title="配送费用" value="免费"></mt-cell>
   <mt-cell title="清洗费" value="2017/03/16"></mt-cell>
    <mt-cell title="优惠券"  is-link>
      <span class="cred">-300</span>
    </mt-cell>
   <mt-cell class="cblack f18" title="总价" value="￥400323"></mt-cell>
 </section>
      <div class="fixedBottom wp100  bgw">  
          <div class="f12 pt20 tc"> 手中无衣箱，会员有效期计时自动暂停</div>
     
         <div class="flexBox flex-row flex-main-center" @click="goRoute({ name: 'orderBox'})"> 
            <mt-button size="normal">去支付</mt-button>
         </div>                      
      </div>
  
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      selected:'1',
      popupVisible:false,
      slots: [
        {
          flex: 1,
          values: ['黄色', '红色', '绿色'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['S', 'M', 'L', 'XL'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
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
    handleClick(){
          this.popupVisible = true
        },
    onValuesChange(picker, values){
      console.log(values[0]+','+values[1])
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
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #FF3F71 !important;
    color: #FF3F71 !important;;
    margin-bottom: -1px !important;;
}
.box{
  
    height: 90px;
    background: #fff url('../assets/images/addboxbg.png') center no-repeat;
    background-size: 100%;
    margin: 10px 5px;
}
.hasPro{
  height: 100px;

}
.hasPro img{
  height: 80px;
  width: 80px
}
  .mint-cell{
    height: 40px !important;
    min-height:40px !important;
     background-color: #f5f5f5 !important;
  }
  .mint-popup-bottom{
    width: 100%
  }
  .cardList .item{
     color: #999;
     border:1px solid #999;
  }
  .cardactive{
     border:1px solid #FF7979 !important;
     color: #FF7979 !important;
  }
 
</style>
