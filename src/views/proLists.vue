<template>
  <section class="proList">
  
    <div @keyup.enter="onEnter">
      <mt-search v-model="searchValue"
                 cancel-text="取消"
                 placeholder="搜索嗨选商品">
      </mt-search>
      <mt-button id="sortChange" class="sort sort1"
                 slot="right" @click="chagesort()"></mt-button>
    </div>
    <section class="padtop10">
      <div class="wth100 flexBox flex-row flex-main-arount">
        <div class="item flex28"
             :class="{'border-1px-colred':labelType===1}"
             @click="changeType(1)">
          <div class="label by-label"></div>
        </div>
        <div class="item flex28"
             :class="{'border-1px-colred':labelType===2}"
             @click="changeType(2)">
          <div class="label lf-label"></div>
        </div>
        <div class="item flex28"
             :class="{'border-1px-colred':labelType===3}"
             @click="changeType(3)">
          <div class="label km-label"></div>
        </div>
      </div>
    </section>
  
    <section class="bgw ">
      <div class="flexBox heth40 flex-row flex-main-arount">
        <div @click='showChanghe=!showChanghe' @blur='changheBlur'>
          <span class="vm city-name f14 ">尺寸</span>
          <span class="city-arrow-icon vm"></span>
        </div>
        <div @click='sellCountChange'  :class="{'sellCountactive':sellCountUp}">
          <span class="vm  f14 xiaoliang">销量</span>
          <span class="arrow-up vm "></span>
        </div>
        <div>
           <filterPro></filterPro>
         <!--  <span class="vm city-name f14" @click='opSX()'>筛选</span>
          <span class="select vm"></span> -->
        </div>
      </div>
    </section>
    <div v-show="showChanghe" 
         class="changhe flexBox flex-row flex-main-arount flex-no-wrap">
      <div class="flex1" @click='chClick("ch1")' :class='{active:changhe==="ch1"}'>S</div>
      <div class="flex1"  @click='chClick("ch2")'  :class='{active:changhe==="ch2"}'>M</div>
      <div class="flex1"  @click='chClick("ch3")'  :class='{active:changhe==="ch3"}'>L</div>
      <div class="flex1"  @click='chClick("ch4")'  :class='{active:changhe==="ch4"}'>1XL</div>
      <div class="flex1"  @click='chClick("ch5")'  :class='{active:changhe==="ch5"}'>2XL</div>
      <div class="flex1"  @click='chClick("ch6")'  :class='{active:changhe==="ch6"}'>3XL</div>
      <div class="flex1"  @click='chClick("ch7")'  :class='{active:changhe==="ch7"}'>4XL</div>
      <div class="flex1"  @click='chClick("ch8")'  :class='{active:changhe==="ch8"}'>5XL</div>

    </div>
  
    <section class="itemofPro mt5">
      <Baoyue v-if="labelType===1"
              :byLists='byLists'></Baoyue>
      <Lifu v-if="labelType===2"
            :lfLists='lfLists'></Lifu>
    </section>
  
   
    <arrowUp></arrowUp>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Baoyue from './Baoyue.vue'
import Lifu from './Lifu.vue'
import { arrowUp, filterPro } from './../components/'

export default {
  data() {
    return {
      //选中的是哪个tab 包月，礼服，可买
      labelType: 1,
      //场合选着是否显示
      showChanghe: false,
      sellCountUp: false,
      searchValue: '',
      byLists: [],
      lfLists: [],
      changhe:'ch1',
    }
  },
  components: {
    arrowUp,
    filterPro,
    Baoyue,
    Lifu
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
    chClick(ch){
      this.changhe=ch
      this.showChanghe=false
      this.getHiSelect()
    },
    changheBlur(){
      this.showChanghe=false      
    },
    addClass( elements,cName ){ 
      if( !hasClass( elements,cName ) ){ 
      elements.className += " " + cName; 
      }; 
    },
    removeClass( elements,cName ){ 
    if( hasClass( elements,cName ) ){ 
    elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换 
    }; 
   },

    hasClass( elements,cName ){ 
      return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
     },
    chagesort(){
      var sortClass=document.getElementById('sortChange');
       if(hasClass('sortClass','')){}
    },
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
    onEnter() {
      this.reqParams.title = this.searchValue
      if (!this.searchValue)
        return
      this.getHiSelect()
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
        if (this.labelType === 1) {
          this.byLists = res.data.data.returnValue
        }
        if (this.labelType === 2) {
          this.lfLists = res.data.data.returnValue
        }

      }).catch(() => {
        this.completeLoad()
        this.clickLoadStatus = false
        this.$toast('系统异常')
      })
    },
    changeType(type) {
      console.log('test')
      this.reqParams.type = type
      this.labelType = type
      // this.byLists = []
      // this.lfLists = []
      this.getHiSelect()
    },
    sellCountChange() {
      this.sellCountUp = !this.sellCountUp
      //销量查询条件更改
      this.reqParams.property = this.sellProperty
      this.getHiSelect()
    },
    //打开筛选框
    opSX(){

    }
  },
  created() {
    //请求参数
    this.reqParams = {
      size: 10,
      page: 0,
      type: 1
    }
    this.getHiSelect()
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

