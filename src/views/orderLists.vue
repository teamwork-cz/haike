<template>
  <section id="orderlistView">
    <mt-header 
               title="我的订单">
        <div slot="left">
           <mt-button  class="sprite_login arrow_back" @click='$router.back()'>
            </mt-button>
         </div>
    </mt-header>
<mt-navbar class="page-part p10 "  v-model="selected">
  <mt-tab-item class="f16" id="1">全部订单</mt-tab-item>
  <mt-tab-item class="f16" id="2">待付款</mt-tab-item>
   <mt-tab-item class="f16" id="3">待发货</mt-tab-item>
  <mt-tab-item class="f16" id="4">待收货</mt-tab-item>
   <mt-tab-item class="f16" id="5">待归还</mt-tab-item>
  <mt-tab-item class="f16" id="6">待评价</mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected" class="">
  <mt-tab-container-item id="1">
     <section class="">
      <div class="boxContain flexBox bgw flex-col p10">
           <mt-cell title="3232738237728732837287" class="bordergray">
            <span class="cred">待付款</span>
            <img slot="icon" src="../assets/images/zu.png" style="width:15px;height:15px">
           </mt-cell>
           <div class="hasPro  flexBox flex-row flex-main-start pt10 bordergray">
              <img src="../assets/images/img.png"></img>
              <div class="flexBox flex-col ">
                 <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
                 <div class="gray f12 p10 pt20" >颜色分类:黄色,尺码:s </div>
              </div>
           </div>   
           <div class="hasPro  flexBox flex-row flex-main-start pt10">
               <img src="../assets/images/img.png"></img>
               <div class="flexBox flex-col ">
                  <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
                 <div class="gray f12 p10 pt20" >颜色分类:黄色,尺码:s </div>
               </div>
           </div>   
      </div>
   <div class="boxContain flexBox flex-col bgw mt10 p10">
           <mt-cell title="3232738237728732837287" class="bordergray">
            <span class="cred">交易成功</span>
            <img slot="icon" src="../assets/images/zu.png" style="width:15px;height:15px">
           </mt-cell>
           <div class="hasPro  flexBox flex-row flex-main-start pt10 bordergray">
              <img src="../assets/images/img.png"></img>
              <div class="flexBox flex-col ">
                 <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
                 <div class="gray f12 p10 pt20" >颜色分类:黄色,尺码:s </div>
              </div>
           </div>   
          <div class="flexBox flex-row flex-main-end h40 mt10">
            <mt-button type="default" class="order_border_gray">查看物流</mt-button>        
            <mt-button type="danger"  class="order_border_red">确认收货</mt-button>
          </div>  
    </div>

     <div class="boxContain flexBox flex-col bgw mt10 p10">
           <mt-cell title="3232738237728732837287" class="bordergray">
            <span class="cred">待归还</span>
            <img slot="icon" src="../assets/images/zu.png" style="width:15px;height:15px">
           </mt-cell>
           <div class="hasPro  flexBox flex-row flex-main-start pt10 bordergray">
              <img src="../assets/images/img.png"></img>
              <div class="flexBox flex-col ">
                 <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
                 <div class="gray f12 p10 pt20" >颜色分类:黄色,尺码:s </div>
              </div>
           </div>   
          <div class="flexBox flex-row flex-main-end h40 mt10">     
            <mt-button type="danger"  class="order_border_red">确认归还</mt-button>
          </div>  
    </div>

    </section>
</mt-tab-container-item>
</mt-tab-container>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
  </mt-tab-container-item>
   </mt-tab-container-item>
  <mt-tab-container-item id="3">
  </mt-tab-container-item>
    </mt-tab-container-item>
  <mt-tab-container-item id="4">
  </mt-tab-container-item>
    </mt-tab-container-item>
  <mt-tab-container-item id="5">
  </mt-tab-container-item>
    </mt-tab-container-item>
  <mt-tab-container-item id="6">
  </mt-tab-container-item>

</mt-tab-container>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import{proItem} from '../components/'
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
proItem
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
    color: #FF3F71 !important;
    margin-bottom: -1px !important;;
}
.boxItem{
  
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

  .mint-popup-bottom{
    width: 100%
  }
  .order_border_gray{
    background-color: #fff !important;
    border: 1px solid #666 !important;
    color: #666 !important;
    font-size: 14px !important;
    height: 30px !important;
    margin-right: 15px !important;
  }
   .order_border_red{
    background-color: #fff !important;
    border: 1px solid #FF3F71 !important;
    color: #FF3F71 !important;
    font-size: 14px !important;
    height: 30px !important;
  }
</style>
