<template>
  <section>
    <mt-header fixed
               title="订单确认">
      <div slot="left">
        <mt-button class="sprite_login arrow_back"
                   @click='$router.back()'>
        </mt-button>
      </div>
    </mt-header>
    <section class="adressOrder top44 flexBox flex-row flex-cross-center h100 p10">
      <div class="addressIcon"></div>
      <div class="flexBox flex-col pl10 "
           @click="goRoute({name:'address'})">
        <div class="flexBox flex-row flex-main-between">
          <div>收货人：{{address.name}}</div>
          <div>{{address.tel}}</div>
        </div>
        <div class="gray">收货地址：上海市长宁区长寿街道娄山关路523弄12号703室</div>
      </div>
  
      <div class="icon arrowRight"></div>
    </section>
    <section class="mt10 bgw p10">
      <div class="">订单号：201703111229450001????哪里来的订单编号</div>
      <div class="hasPro bgw flexBox flex-row flex-main-start pt10">
        <img src="../assets/images/img.png"></img>
        <div class="flexBox flex-col ">
          <div class="pl10">李维斯(Levi’s)女士休闲群装 #Medium Stonewash</div>
          <div class="gray f12 p10">颜色分类:黄色,尺码:s </div>
        </div>
      </div>
  
    </section>
    <section class="mb100">
      <section class="bgw mt10 p10">
        <express></express>
        <dateTime title="预计送达时间"></dateTime>
        <dateTime title="预计返还时间"></dateTime>
      </section>
  
      <section class="bgw mt10 p10 ">
        <mt-cell class="bgw f14 gray"
                 title="4日租金">
          <span class="cblack">￥300.00</span>
        </mt-cell>
        <mt-cell class="bgw f14 gray"
                 title="押金">
          <span class="cblack">￥300.00</span>
        </mt-cell>
        <mt-cell class="bgw f14 gray"
                 title="优惠券"
                 is-link>
          <span class="cblack">请选择优惠券 </span>
        </mt-cell>
        <mt-cell class="bgw f14 gray"
                 title="总计">
          <span class="cblack">￥300.00</span>
        </mt-cell>
      </section>
  
    </section>
  
    <section class="fixedBottom wp100  bgw">
      <div class="flexBox flex-row flex-main-center">
        <mt-button size="normal"
                   class=""
                   @click="goRoute({name:'bpay'})">提交订单</mt-button>
      </div>
    </section>
  
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { dateTime, express } from '../components/'
export default {
  data() {
    return {
    }
  },
  components: {
    dateTime,
    express
  },
  computed: {
    ...mapGetters({
      address: 'defaultAddress'
    }),
    cloth(){
      return this.$route.params.cloth
    }
  },
  methods: {
    ...mapMutations([

    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
    openExpress() {

    },
    requestData(url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then((res) => {
        this.completeLoad()
        fn(res)
      })
    },
  },
  mounted() {
console.log(this.cloth)

  }
}
</script>

<style>
.adressOrder {
  background: #fff url('../assets/images/addressbg.png') bottom no-repeat;
  background-size: 100%;
}

.addressIcon {
  height: 20px;
  width: 20px;
  background: url('../assets/images/address.png') center no-repeat;
  background-size: 100%;
}

.arrowRight {
  height: 15px;
  width: 15px;
  background: url('../assets/images/arrow_right.png') center no-repeat;
  background-size: 100%;
}
</style>
