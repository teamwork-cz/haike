<template>
  <section>
    <mt-header fixed
               title="嗨克">
      <div slot="left">
        <mt-button class="sprite kefu"></mt-button>
      </div>
  
      <mt-button slot="right"
                 @click='$router.push("/box")'
                 class="sprite car"></mt-button>
      <mt-button slot="right"
                 class="sprite box"></mt-button>
    </mt-header>
    <mt-badge type="error"
              size="small">99+</mt-badge>
  
    <section v-show="selnav"
             class="content">
      <swiper :imgs="imgs"></swiper>
      <div class="labelDecribe"></div>
  
      <div class=" flexBox flex-row flex-main-arount flex-main-center bgw pt20 pb20  mt10">
        <div class="item ">
          <div class="group group_new mc"></div>新品上市
        </div>
        <div class="item ">
          <div class="group group_star mc"></div>明星同款</div>
        <div class="item ">
          <div class="group group_des mc"></div>设计师</div>
        <div class="item ">
          <div class="group group_sale mc"></div>折扣专区</div>
      </div>
      <!--  
        <div class="">
          <router-link :to="{ name: 'detail', params: { id: '0'}}">
            <div class=""></div>
          </router-link>
        </div>-->
  
      <hot :hotLists="hotLists"></hot>
    </section>
    <!-- <play-video></play-video> -->
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { swiper, hot } from '../components/'
export default {
  data() {
    return {
      moveDistance: '5%',
      imgs: [],
      loaingLists: [],
      selnav: true,
      clickLoadStatus: 'start',
      offset: 0,
      limit: 2,
      total: 0,
      hotLists: [],
    }
  },
  components: {
    swiper,
    hot,
  },
  methods: {
    ...mapMutations([
      'pushLoadStack',
      'completeLoad',
      'showCityList',
      'pushComingList'
    ]),
    moveTab(event) {
      event.target.getAttribute('hot') ? this.selectHotTab() : this.slectComingTab()
    },
    selectHotTab() {
      this.selnav = true
      this.moveDistance = '5%'
      this.pushComingList({ lists: [] })
    },
    slectComingTab() {
      this.selnav = false
      this.moveDistance = '55%'
      this.pushComingList({ lists: this.loaingLists })
    },
    getWeekDay(num) {
      let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      return weeks[num]
    },
    clickLoadMore() {
      if (this.clickLoadStatus != 'complete') {
        this.clickLoadStatus = 'loading'
        setTimeout(() => {
          this.$http.get(`/movie/coming/?limit=${this.limit}&offset=${this.offset}`).then((response) => {
            let data = response.data
            let lists = data.data.data.returnValue
            this.loaingLists = this.loaingLists.concat(lists)
            //模拟索引数据的id号
            this.loaingLists.forEach((item, index) => {
              item.mID = index
            })
            this.pushComingList({ lists: this.loaingLists })
            this.comingLists = this.sortComingData(this.loaingLists)
            this.offset = this.offset + this.limit
            if (this.offset < this.total) {
              this.clickLoadStatus = 'start'
            } else {
              this.clickLoadStatus = 'complete'
            }
          })


        }, 500)
      }
    },
    requestData(url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then((res) => {
        this.completeLoad()
        fn(res)
      })
    },
    sortComingData(lists) {
      let comingLists = []
      lists.forEach((item) => {
        let hasItem = false
        for (let i = 0; i < comingLists.length; i++) {
          if (item.openTime === comingLists[i].openTime) {
            comingLists[i].movies.push(item)
            hasItem = true
            break
          }
        }
        if (!hasItem) {
          let comingItem = {
            openTime: '',
            day: '',
            movies: []
          }
          comingItem.openTime = item.openTime
          comingItem.day = this.getWeekDay(new Date(item.openTime).getDay())
          comingItem.movies.push(item)
          comingLists.push(comingItem)
        }
      })
      return comingLists
    }
  },
  created() {
    this.pushComingList({ lists: [] })
    this.pushLoadStack()
    this.$reqData.req({
      apiName: 'topSlides',
      url: '/appMainTop/l',
      method: 'get'
    }).then((res) => {
      this.clickLoadStatus = false
      this.completeLoad()
      console.log(res)

      res = res.data
      if (res.errno !== 0) {
        this.$toast(res.msg)
        return
      }
      this.imgs = res.data.data.returnValue
    }).catch(() => {
      this.completeLoad()
      this.clickLoadStatus = false
      this.$toast('系统异常')
    })
    this.pushLoadStack()
    this.$reqData.req({
      apiName: 'bodyHot',
      url: '/appMainBody/l',
      method: 'get',
      params: {

      }
    }).then((res) => {
      this.clickLoadStatus = false
      this.completeLoad()
      console.log(res)
      res = res.data
      if (res.errno !== 0) {
        this.$toast(res.msg)
        return
      }
      this.hotLists = res.data.data.returnValue
    }).catch(() => {
      this.completeLoad()
      this.clickLoadStatus = false
      this.$toast('系统异常')
    })


    // this.requestData(`/movie/coming/?limit=${this.limit}&offset=${this.offset}`, (response) => {
    //   let data = response.data
    //   let lists = data.data.data.returnValue
    //   //模拟索引数据的id号
    //   lists.forEach((item, index) => {
    //     item.mID = index  
    //   })
    //   this.loaingLists = lists
    //   this.total = data.total
    //   this.comingLists = this.sortComingData(lists)
    //   this.offset = this.offset + this.limit
    // })
  }
}
</script>

<style>
.selnav {
  color: #ff4d64;
}

.selnav img {
  height: 230px;
}

.city {
  width: 35%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  display: inline-block;
}

.city-arrow-icon {
  margin-left: 4px;
  width: 12px;
  height: 12px;
  display: inline-block;
}

.city-arrow-icon:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: 1px solid #50505a;
  border-top: 0 none;
  border-left: 0 none;
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.content {
  margin-top: 44px;
  margin-bottom: 58px;
}

.sel-lists {
  width: 65%;
  display: -moz-box;
  display: -webkit-box;
  display: box;
}

.sel-lists div {
  -moz-box-flex: 1.0;
  -webkit-box-flex: 1.0;
  line-height: 40px;
  text-align: center;
}

.move {
  display: inline-block;
  bottom: 0px;
  width: 40%;
  border-bottom: 3px solid #ff4d64;
  -webkit-transition: left 0.7s ease-in-out;
  transition: left 0.7s ease-in-out;
}

.click-load-more {
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #333;
  font-size: 15px;
  background-color: #fff;
  margin: 5px 0 8px;
}

.loading-icon span {
  vertical-align: middle;
}

.labelDecribe {
  height: 40px;
  width: 100%;
  background: #fff url('../assets/images/describe.png') center no-repeat;
  background-size: 100%;
}
</style>
