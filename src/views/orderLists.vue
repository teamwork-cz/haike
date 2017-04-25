<template>
  <section id="boxView">
    <mt-header 
               title="使用中的衣箱">
        <div slot="left">
           <mt-button  class="sprite_login arrow_back" @click='$router.back()'>
            </mt-button>
         </div>
    </mt-header>


<mt-navbar class="page-part p10 "  v-model="selected">
  <mt-tab-item class="f16" id="1">使用中的衣箱</mt-tab-item>
  <mt-tab-item class="f16" id="2">礼服订单</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected" class="bgw p10">
  <mt-tab-container-item id="1">
     <section class="">
      <div class="">衣服状态：未寄出</div>
      <div class="boxContain flexBox flex-col">
         <div class="boxItem flexBox flex-main-center">
            <mt-cell-swipe
              :right="[
                {
                  content: '删除',
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <div class="hasPro bgw flexBox flex-row flex-main-start">
                  <img src="../assets/images/img.png"></img>
                  <div class="flexBox flex-col ">
                     <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
           <!--           <sizecolor :slots="slots"></sizecolor> -->
                     <div class="gray f12 p10 pt20" @click="handleClick()" >颜色分类:黄色,尺码:s </div>
                  </div>
               </div>
          </mt-cell-swipe>
         </div>

          <div class="boxItem flexBox flex-main-center">
            <mt-cell-swipe
              :right="[
                {
                  content: '删除',
                  handler: () => this.$messagebox('delete')
                }
              ]">
                <div class="hasPro bgw flexBox flex-row flex-main-start">
                  <img src="../assets/images/img.png"></img>
                  <div class="flexBox flex-col ">
                     <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
                     <div class="gray f12 p10 pt20" @click="handleClick()">颜色分类:黄色,尺码:s </div>
                  </div>
               </div>
          </mt-cell-swipe>
         </div>
         <div class="boxItem flexBox flex-main-center" @click="goRoute({ name: 'hiSelect'})"></div>
      </div>

     


</section>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
<proItem></proItem>
  </mt-tab-container-item>
 
</mt-tab-container>

<mt-popup
  v-model="popupVisible"
  position="bottom"
  popup-transition="popup-fade" > 
  <mt-picker :slots="slots" @change="onValuesChange" ></mt-picker>

</mt-popup>

  
<div class="f12 gray pt20 tc">查看历史记录>></div>


      <div class="fixedBottom wp100  bgw">   
         <div class="flexBox flex-row flex-main-center" @click="goRoute({ name: 'orderBox'})"> 
            <mt-button size="normal">寄这个衣箱给我（1/3）</mt-button>
         </div>                      
      </div>
  
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
    color: #FF3F71 !important;;
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
</style>
