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
  computed: {
    ...mapGetters(['clothesCount']),
    cloth() {
      const cloth = {
        title: this.product.name,
        color: this.product.color[this.product.selectesColor].value,
        size: this.product.size[this.product.selectesSize].value,
        colors: this.product.color.map(function (itm) {
          return itm.value
        }),
        sizes: this.product.size.map(function (itm) {
          return itm.value
        })
      }
      return cloth
    }
  },
  methods: {
    ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList'

    ]),
    ...mapActions(['updateClothes']),
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
      // route.params.sku=this.sku
      this.$router.push(route)
    },
    addPro() {
      if (this.clothesCount >= 3) {
        MessageBox({
          message: '您的衣箱已经满了',
          showConfirmButton: true,
          showCancelButton: true,
          cancelButtonText: '继续逛',
          confirmButtonText: '去衣箱',
          confirmButtonClass: 'cred'
        }).then((value) => {
          if (value === 'cancel') {
            this.$router.back()
            return
          }
          this.goRoute({ name: "box" })
        })
        return
      }

      this.updateClothes({ type: 'add', cloth: this.cloth })
    },
    //立即租赁
    zulin() {
      this.goRoute({ name: "orderLf", params: { cloth: this.cloth } })
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
  <div class="container f16 mb100"
       id="proInfo" >
    <div class="row">
      <section>
        <mt-button slot="right">单品详情</mt-button>
        <mt-header fixed
                   title="嗨克">
          <div slot="left">
            <mt-button class="sprite_login arrow_back"
                       @click='$router.back()'>
            </mt-button>
          </div>
          <mt-button @click='$router.push("/box")'
                     slot="right"
                     class="sprite box"></mt-button>
        </mt-header>
        <mt-badge class="single"
                  type="error"
                  size="small">{{this.clothesCount}}</mt-badge>
      </section>
  
      <section class="">
        <swiper :imgs="product.slideImages"></swiper>
      </section>
      <div class="bgw pl15 pr15">
        <div class="detail">
          <div class="pt15 pb10">
            <h3 class="name "><span >{{product.name||''}}</span></h3>
            <h4 class="f12 gray">价格：<span class="red f16" >￥</span><span class="red f16" v-text="product.price"></span></h4>
          </div>
  
          <div class="options flexBox flex-col flex-cross-start border-top pt10 pb5">
            <div class="f14 ">选择尺码：</div>
            <ul class="flexBox flex-row flex-wrap pt10">
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
      <section class="bgw mt10 p10 pt15" id="probadge">
        <div class="tc centerText">礼服信息</div>
        <div class="badgeList pt20">
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
        <div class="otherInfo mt26">
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
                      v-if="product.type=='0'">立即租赁</mt-button>

        </div>
  
      </div>
    </div>
  
  </div>
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
  border-radius: 5px
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
#probadge .is-size-small {
    border-radius: 15px;
    font-size: 12px;
    padding: 2px 10px;
    height: 25px;
    line-height: 25px;
    margin-right: 15px;
    margin-bottom: 10px;
}
</style>
