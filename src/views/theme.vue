<template>
<div>
 <section>
        <mt-button slot="right">换穿全球精选时装</mt-button>
        <mt-header fixed
                   title="换穿全球精选时装">
          <div slot="left">
            <mt-button class="sprite_login arrow_back"
                       @click='$router.back()'>
            </mt-button>
          </div>
          </mt-header>
      </section>
  <div class="bgw ">
    <img src="../assets/images/sample.png">
  </div>
 <div class="bgw">
    <ul class="bordergray p15">
      <li class="f16" style="line-height:19px">Q：嗨客提供什么服务？</li>
      <li class="f14 gray" style="line-height: 21px;padding-top: 7px">A：嗨客包括两个核心服务，时装全球精选，可购买，以
     及大牌服装次租。</li>
    </ul>
     <ul class="bordergray p15">
      <li class="f16" style="line-height:19px">Q：大牌服装次租怎么用？</li>
      <li class="f14 gray" style="line-height: 21px;padding-top: 7px">A：服装可以按次租赁，一次4天使用时间，不包含物流
     时间。</li>
    </ul>
    <ul class="bordergray p15">
      <li class="f16" style="line-height:19px">Q：时装是如何清洗的？</li>
      <li class="f14 gray" style="line-height: 21px;padding-top: 7px">A：嗨客和最专业的中央清洗工厂合作，采用第五代专业
     设备，经过12道工序，能够做到细菌和衣物的彻底分
     离。</li>
     <li>了解详细的清洗步骤请：前往“嗨客清洗报告”</li>
    </ul>
    <ul class="bordergray p15">
      <li class="f16" style="line-height:19px">Q：时装是如何配送的？</li>
      <li class="f14 gray" style="line-height: 21px;padding-top: 7px">A：配送全部由嗨客承担，在APP内下单确定配送时间和
     地点，坐等衣箱上门即可。下新衣箱时可以直接预约
     旧衣箱归还时间和地点，快递员直接上门取件。</li>
    </ul>

 </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  components: {

  },
  methods: {
    ...mapMutations([
  
    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
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

</style>

