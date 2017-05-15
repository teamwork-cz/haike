<template>
  <section id="boxView">
    <mt-header title="使用中的衣箱">
      <div slot="left">
        <mt-button class="sprite_login arrow_back"
                   @click='$router.back()'>
        </mt-button>
      </div>
    </mt-header>
  
    <mt-navbar class="page-part p10 "
               v-model="selected">
      <mt-tab-item class="f16"
                   id="1">使用中的衣箱</mt-tab-item>
      <mt-tab-item class="f16"
                   id="2">礼服订单</mt-tab-item>
    </mt-navbar>
  
    <!-- tab-container -->
    <mt-tab-container v-model="selected"
                      class="bgw p10">
      <mt-tab-container-item id="1" class="mb100">
        <section class="">
          <div class="">衣服状态：{{postStatus}}</div>
          <div class="boxContain flexBox flex-col mt10" id="box">
            <div v-for="(item,index) in boxClothes"
                 class="boxItem flexBox flex-main-start">
              <mt-cell-swipe :right="[
                                              {
                                                content: '删除',
                                                handler:()=>{onDelete(index)}
                                              }
                                            ]">
                <div class="hasPro bgw flexBox flex-row flex-main-start">
                   <img :src="'http://www.hykeyun.com/image?u=' + item.imgUrl"></img>
                  <div class="flexBox flex-col wp100">
                    <div class="pl10">{{item.title}}</div>
                    <div class="gray f12 p10 pt20 flexBox flex-row flex-main-between "
                         @click="handleClick(item,index)">
                         <div>颜色分类:{{item.color}},尺码:{{item.size}} </div>
                         <div class="arrow_down_right"></div>
                    </div>
                  </div>
                </div>
              </mt-cell-swipe>
            </div>
  
            <div v-for="i in nullBox"
                 class="boxItem flexBox flex-main-center"
                 @click="goRoute({ name: 'hiSelect'})"></div>
          </div>
  
        </section>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="mb100">
     <!-- rrrr -->
      </mt-tab-container-item>
  
    </mt-tab-container>
  
    <mt-popup v-model="popupVisible"
              position="bottom"
              popup-transition="popup-fade">
      <mt-picker :slots="slots"
                 @change="onValuesChange"></mt-picker>
  
    </mt-popup>
  
    <div class="f12 gray pt20 tc">查看历史记录>></div>
  
    <div class="fixedBottom wp100  bgw">
      <div class="flexBox flex-row flex-main-center"
           @click="goRoute({ name: 'orderBox'})">
        <mt-button size="normal">寄这个衣箱给我（{{this.clothesCount}}/3）</mt-button>
      </div>
    </div>
  
  </section>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { proItem } from '../components/'
import imgUrl from '../assets/images/img.png'
export default {
  data() {
    return {
      selected: '1',
      popupVisible: false,
      cloth: {},
      imgUrl: imgUrl
    }
  },
  components: {
    proItem
  },
  computed: {
    ...mapGetters(['clothesCount',
      'boxClothes']),
    postStatus() {
      return '未寄出'
    },
    nullBox() {
      return (3 - this.clothesCount)
    },
    slots() {
      const slots = [
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
      // slots[0].values = this.cloth.colors || ['黄色', '红色', '绿色']
      // slots[2].values = this.cloth.sizes || ['S', 'M', 'L', 'XL']
      console.log(slots)
      return slots
    }
  },
  methods: {
    ...mapActions(['updateClothes']),
    onDelete(index) {
      this.updateClothes({ type: 'del', index: index })
      console.log('del' + index)
    },
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
    handleClick(item, index) {
      this.popupVisible = true
      this.cloth = item
      this.cloth.index = index
    },
    onValuesChange(picker, values) {
      // console.log(picker)
      console.log(values[0] + ',' + values[1])
      this.cloth.color = values[0]
      this.cloth.size = values[1]
      console.log(this.cloth)
      this.updateClothes({ type: 'update', index: this.cloth.index, cloth: this.cloth })
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

    console.log("count" + this.clothesCount)
  }
}
</script>

<style>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #FF3F71 !important;
  color: #FF3F71 !important;
  margin-bottom: -1px !important;
}


.hasPro {
  height: 100px;
  width: 100%;
}

.hasPro img {
  height: 80px;
  width: 80px
}
#box .mint-cell-value{
  width: 100%
}
.mint-popup-bottom {
  width: 100%
}
.mint-cell{
  width: 100%
}
</style>
