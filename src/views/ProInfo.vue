<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
// import { changePrice, changeStyle, addItem } from '../store/cart/actions'

// import { changePrice, changeStyle, addItem } from '../vuex/actions'
import { swiper } from '../components/'
import { MessageBox } from 'mint-ui'
export default {
  name: 'ProInfo',
  data() {
    return {
      activeStyle: '',
      product: {
      },
      sku: {}
    }
  },
  components: {
    swiper,
    MessageBox
  },
  methods: {
    ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList',
    ]),
    selectesColor(item, index) {
      console.log(item)
      this.sku.color = item
      this.product.selectesColor = index;
    },
    selectesSize(item, index) {
      this.product.selectesSize = index;
      this.sku.size = item
    },
    goRoute(route) {
      console.log(this.$router)
      route.params = { sku: this.sku }
      this.$router.push(route)
    },
    addPro() {
      MessageBox({
        message: '您的衣箱已经满了',
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: '继续逛',
        confirmButtonText: '去衣箱',
        confirmButtonClass: 'cred'
      }).then(({ value, action }) => {
        this.goRoute({ name: "box" })
      });
    },
    //立即租赁
    zulin() {
      this.goRoute({ name: "orderLf" })
    },
    //试穿说明
    openSC() {
      MessageBox({
        title: '免费试穿',
        message: '若担心尺码不合适，可多下1单。不合适的服装只需在收到后12小时内告知客服，24小时内提供返回快递单号，即可退还租金和押金。',
        confirmButtonClass: 'buttonRed'
      });
    }
  },
  created() {
    this.pushLoadStack()
    this.$reqData.req({
      apiName: 'detail',
    }).then((res) => {
      this.clickLoadStatus = false
      this.completeLoad()
      res = res.data
      if (res.errno !== 0) {
        this.$toast(res.msg)
        return
      }

      this.product = res.data.data.returnValue
      console.log(this.product)
    }).catch(() => {
      this.completeLoad()
      this.clickLoadStatus = false
      this.$toast('系统异常')
    })
  },
}
</script>
<template>
  <div class="container f16"
       id="proInfo">
    <div class="row">
      <section>
        <mt-button slot="right">单品详情</mt-button>
        <mt-header fixed
                   title="嗨克">
          <div slot="left">
            <mt-button @click='$router.back()'>
              <</mt-button>
          </div>
          <mt-button @click='$router.push("/box")'
                     slot="right"
                     class="sprite box"></mt-button>
        </mt-header>
        <mt-badge class="single"
                  type="error"
                  size="small">99+</mt-badge>
      </section>
  
      <section class="">
        <swiper :imgs="product.slideImages"></swiper>
      </section>
      <div class="bgw pl10 pr10">
        <div class="detail">
          <div class="pt10 pb10">
            <h3 class="name "><span >{{product.name||''}}</span></h3>
            <h4 class="f12 gray">价格：<span class="red f16" >￥</span><span class="red f16" v-text="product.price"></span></h4>
          </div>
  
          <div class="options flexBox flex-col flex-cross-start border-top">
            <div class="f14 ">选择尺码：</div>
            <ul class="flexBox flex-row flex-wrap">
              <li v-for="(item,index) in product.color"
                  @click="selectesColor(item,index)"
                  :class="{active: index  == product.selectesColor}">
                <span v-text="item.text"></span>
              </li>
            </ul>
            <div class="f14 ">选择颜色:</div>
            <ul class="flexBox flex-row flex-wrap">
              <li v-for="(item,index) in product.size"
                  @click="selectesSize(item,index)"
                  :class="{active: index  == product.selectesSize}">
                <span v-text="item.text"></span>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
      <!-- 免费试穿 -->
      <section class="gray  p15 bgw"
               @click="openSC()"
               v-if="product.type=='lifu'">
        <mt-button type="default"
                   class="wp100 f14">
          免费试穿
          <img src="../assets/images/question.png"
               slot="icon">
        </mt-button>
      </section>
      <section class="bgw mt10 p10">
        <div class="tc centerText">礼服信息</div>
        <div class="badgeList mt10">
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
          <mt-badge size="small"
                    color="#ccc">礼服</mt-badge>
        </div>
        <div class="otherInfo">
          <mt-cell class="bgw f14"
                   title="标题文字"
                   value="说明文字"></mt-cell>
          <mt-cell class="bgw f14"
                   title="标题文字"
                   value="说明文字"></mt-cell>
          <mt-cell class="bgw f14"
                   title="标题文字"
                   value="说明文字"></mt-cell>
          <mt-cell class="bgw f14"
                   title="标题文字"
                   value="说明文字"></mt-cell>
  
        </div>
      </section>
  
      <div class="fixedBottom wp100  bgw">
        <div class="flexBox flex-row flex-main-center">
          <mt-button size="normal"
                     class=""
                     @click="addPro()"
                     v-if="product.type=='1'">加入我的衣箱</mt-button>
          <mt-button size="normal"
                     class=""
                     @click="zulin()"
                     v-if="product.type=='2'">立即租赁</mt-button>
        </div>
  
      </div>
    </div>
  
    <!--  <div class="mask"></div> -->
  </div>
  <!-- ./container -->
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

.options .title {
  font-size: 14px;
  height: 34px;
  line-height: 34px
}

.options ul {
  padding: 0;
}

.options ul>li {
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

.mint-button-icon {
  height: 13px;
  width: 13px;
  position: relative;
  left: 80px;
  top: -3px;
}

.mint-msgbox-btns {
  margin: 10px !important;
}

.mint-msgbox-message {
  line-height: 21px !important;
}
</style>
