<template>

  <section class="proList">

    <div> 
       <mt-search  v-model="value" cancel-text="取消" placeholder="搜索嗨选商品">
       </mt-search>
       <mt-button class="sort sort1" slot="right"></mt-button>
    </div>

 <!-- <div class="content"> -->
    <section class="padtop10">
       <div class="wth100 flexBox flex-row flex-main-arount">
        <div class="item border-1px-colred"><div class="label by-label"></div></div>
        <div class="item "><div class="label lf-label"></div></div>
        <div class="item "><div class="label km-label"></div></div>
       </div>
    </section> 
    
    <section class="bgw ">
     <div class="flexBox heth40 flex-row flex-main-arount">
      <div>
        <span class="vm city-name f14 ">场合</span>
        <span class="city-arrow-icon vm"></span>
      </div>
       <div>
        <span class="vm city-name f14">销量</span>
        <span class="arrow-up vm"></span>
      </div>
       <div>
        <span class="vm city-name f14">帅选</span>
        <span class="select vm"></span>
      </div>
    </div>
    </section>
    <div class="changhe flexBox flex-row flex-main-arount flex-no-wrap">
        <div class="flex1 active">酒会/年会</div>
        <div class="flex1">派对</div>
        <div class="flex1">婚礼</div>
        <div class="flex1">晚宴</div>
    </div>



    <section class="itemofPro mt5">
      <div class="flexBox flex-row flex-main-arount flex-wrap" 
       infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
       
            <div class="flex1" v-for="item in proLists">
             <router-link :to="{ name: 'proInfo', params: { id:`${item.proId}`}}">
              <img class="width185" v-lazy.container="item.images">
              <div class="title">{{item.name}}</div>
            </router-link>  
            </div>
               
    
      </div>
    </section>
    <arrowUp></arrowUp>
    </section>
 <!-- </div> -->


 

  
<!--   <mt-navbar v-model="selected" value="1">
      <mt-tab-item id="1" >包月换衣</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
    </mt-navbar> -->



   <!--  <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 20" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'content ' + n" />
      </mt-tab-container-item>
    </mt-tab-container> -->




    </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { arrowUp } from '../components/'

export default {
  data () {
    return {
      value:'',
      selected:{
        value:"1"
      },
      proLists:[{
        proId:'1',
        name:'产品1',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        proId:'2',
        name:'产品2',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品3',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品4',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },{
        name:'产品1',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品2',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品3',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品4',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },{
        name:'产品1',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品2',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品3',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      },
      {
        name:'产品4',
        images:"http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"
      }
      ]
    }
  },
  components: {
    arrowUp,
  },
  methods: {
      ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList'
    ]),
    moveTab (event) {
      event.target.getAttribute('hot') ? this.selectHotTab() : this.slectComingTab()
    },
    selectHotTab () {
      this.selnav = true
      this.moveDistance = '5%'
      this.pushComingList({lists: []})
    },
    slectComingTab () {
      this.selnav = false
      this.moveDistance = '55%'
      this.pushComingList({lists: this.loaingLists})
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.proLists[this.proLists.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.proLists.push(last + i);
        }
        this.loading = false;
      }, 2500);
}
   
  },
  created () {
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
.width185{
  width: 185px;
  height: 237px
}
.itemofPro .title{
  text-align: left;
  height: 44px;
  font-size: 14px;
  padding-left: 10px;
  line-height: 44px
}
.bgw{
  background-color: #fff
}
.label{
  width: 110px;
  height: 50px;
}
.by-label{
  background: #fff url('../assets/images/by-label.jpg') center no-repeat;
  background-size: 100% 100%;
}
.lf-label{
  
  background: #fff url('../assets/images/lf-label.jpg') center no-repeat;
  background-size: 100% 100%;
}
.km-label{
  
  background: #fff url('../assets/images/km-label.jpg') center no-repeat;
  background-size: 100% 100%;
}


.mint-search {
    height: 100%;
    overflow: hidden;
    border-bottom: 1px solid #DFDFDF;
}
.mint-searchbar {
  background-color: #fff;
  padding: 8px 50px 8px 10px;
}
.mint-searchbar-inner {
    background-color: #f5f5f5;
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

