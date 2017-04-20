<template>
  <section class="proList">
  
    <div>
      <mt-search v-model="value"
                 cancel-text="取消"
                 placeholder="搜索嗨选商品">
      </mt-search>
      <mt-button class="sort sort1"
                 slot="right"></mt-button>
    </div>
    <section class="padtop10">
      <div class="wth100 flexBox flex-row flex-main-arount">
        <div class="item "
             :class="{'border-1px-colred':labelType===1}"
             @click="changeType(1)">
          <div class="label by-label"></div>
        </div>
        <div class="item "
             :class="{'border-1px-colred':labelType===2}"
             @click="changeType(2)">
          <div class="label lf-label"></div>
        </div>
        <div class="item "
             :class="{'border-1px-colred':labelType===3}"
             @click="changeType(3)">
          <div class="label km-label"></div>
        </div>
      </div>
    </section>
  
    <section class="bgw ">
      <div class="flexBox heth40 flex-row flex-main-arount">
        <div @click='showChanghe=!showChanghe'>
          <span class="vm city-name f14 ">场合</span>
          <span class="city-arrow-icon vm"></span>
        </div>
        <div @click='sellCountChange'>
          <span class="vm city-name f14">销量</span>
          <span class="arrow-up vm"></span>
        </div>
        <div>
          <span class="vm city-name f14">帅选</span>
          <span class="select vm"></span>
        </div>
      </div>
    </section>
    <div v-show="showChanghe"
         class="changhe flexBox flex-row flex-main-arount flex-no-wrap">
      <div class="flex1 active">酒会/年会</div>
      <div class="flex1">派对</div>
      <div class="flex1">婚礼</div>
      <div class="flex1">晚宴</div>
    </div>
  
    <section class="itemofPro mt5">
      <Baoyue v-if="labelType===1"
              byLists='proLists'></Baoyue>
      <div v-if="labelType===2"
           class="flexBox flex-row flex-main-arount flex-wrap"
           infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
  
        <div class="flex1"
             v-for="item in proLists">
          <router-link :to="{ name: 'proInfo', params: { id:`${item.proId}`}}">
            <img class="width185"
                 v-lazy.container="item.images">
            <div class="title">{{item.name}}</div>
  
            <div 
                 class="flexBox flex-row flex-main-between f12 p10">
              <div class="cred">¥388/4天</div>
              <div class="gray">市场价¥6000</div>
  
            </div>
          </router-link>
        </div>
      </div>
    </section>
  
    <!-- <filterPro></filterPro> -->
    <arrowUp></arrowUp>
  
  </section>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Baoyue from './Baoyue.vue'
import { arrowUp, filterPro } from './../components/'

export default {
  data() {
    return {
      labelType: 2,
      showChanghe: false,
      sellCountUp: false,
      value: '',
      proLists: [
        {
          proId: '1',
          name: '产品1',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          proId: '2',
          name: '产品2',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品3',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品4',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        }, {
          name: '产品1',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品2',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品3',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品4',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        }, {
          name: '产品1',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品2',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品3',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        },
        {
          name: '产品4',
          images: "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
        }
      ]
    }
  },
  components: {
    arrowUp,
    filterPro,
    Baoyue
  },
  computed: {
    sellProperty() {
      if (this.sellCountUp) {
        return 'sellCount'
      }
      return ''
    }
  },
  methods: {
    ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList'
    ]),
    loadMore() {
      console.log('loadingmore')
      this.loading = true;
      setTimeout(() => {
        let last = this.proLists[this.proLists.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.proLists.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    getHiSelect() {
      this.pushLoadStack()
      this.$reqData.req({
        apiName: 'hiSelect',
        params: this.reqParams
      }).then((res) => {
        this.clickLoadStatus = false
        this.completeLoad()
        console.log(res)
        res = res.data
        if (res.errno !== 0) {
          this.$toast(res.msg)
          return
        }
        if (this.labelType === 2) {
          this.proLists = res.data.data.returnValue
        }

      }).catch(() => {
        this.completeLoad()
        this.clickLoadStatus = false
        this.$toast('系统异常')
      })
    },
    changeType(type) {
      console.log('test')
      //包月换衣
      if (type === 1) {

      }
      this.labelType = type
      this.getHiSelect()
    },
    sellCountChange() {
      this.sellCountUp = !this.sellCountUp
      this.getHiSelect()
    }
  },
  created() {
    //请求参数
    this.reqParams = {}
    // this.getHiSelect()
  }
}
</script>

<style>
.proList {
  /*padding-top: 10px;*/
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.width185 {
  width: 185px;
  height: 237px
}

.itemofPro .title {
  text-align: left;
  /*  height: 44px;*/
  font-size: 14px;
  padding-left: 10px;
  /*line-height: 44px*/
}

.bgw {
  background-color: #fff
}

.label {
  width: 110px;
  height: 50px;
}

.by-label {
  background: #fff url('../assets/images/by-label.jpg') center no-repeat;
  background-size: 100% 100%;
}

.lf-label {

  background: #fff url('../assets/images/lf-label.jpg') center no-repeat;
  background-size: 100% 100%;
}

.km-label {

  background: #fff url('../assets/images/km-label.jpg') center no-repeat;
  background-size: 100% 100%;
}


.mint-search {
  overflow: hidden;
  border-bottom: 1px solid #DFDFDF !important;
  ;
  height: 50px !important;
}

.mint-searchbar {
  background-color: #fff !important;
  ;
  padding: 8px 50px 8px 10px !important;
  ;
}

.mint-searchbar-inner {
  background-color: #f5f5f5 !important;
  border-radius: 6px;
  flex: 1;
  height: 30px;
  padding: 0px 6px;
}

.mint-searchbar-inner .mintui-search {
  padding-right: 10px;
}

.mint-searchbar-core {
  background-color: whitesmoke;
}

.go-back {
  background: #ff2c43;
  display: none;
}
</style>

